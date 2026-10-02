import { useEffect, useState } from 'react'

const DEFAULTS = { typeSpeed: 75, deleteSpeed: 38, pause: 1700 }

/**
 * Types, pauses, deletes and cycles through `words`.
 * With prefers-reduced-motion the first word renders statically.
 */
export function useTypewriter(words, options = {}) {
  const { typeSpeed, deleteSpeed, pause } = { ...DEFAULTS, ...options }
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setText(words[0] ?? '')
      return undefined
    }

    const word = words[wordIndex % words.length] ?? ''
    let timeoutId

    if (!isDeleting && text === word) {
      timeoutId = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((index) => (index + 1) % words.length)
    } else {
      timeoutId = setTimeout(
        () => {
          setText(word.slice(0, text.length + (isDeleting ? -1 : 1)))
        },
        isDeleting ? deleteSpeed : typeSpeed,
      )
    }

    return () => clearTimeout(timeoutId)
  }, [text, isDeleting, wordIndex, words, reducedMotion, typeSpeed, deleteSpeed, pause])

  return text
}
