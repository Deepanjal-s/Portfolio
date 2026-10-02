import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver that adds `.is-visible` to the element
 * the first time it scrolls into view, driving the `.reveal` CSS pattern.
 * Respects `prefers-reduced-motion` by revealing immediately.
 */
export function useReveal({ threshold = 0.12, rootMargin = '0px 0px -6% 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
