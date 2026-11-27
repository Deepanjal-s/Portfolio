import { useCallback, useEffect, useRef, useState } from 'react'

// Only an explicit toggle is stored. Earlier versions saved the OS theme under 'theme' on every visit, so that key is
// ignored: it can't tell a real choice from an automatic one. index.html reads the same key before first paint.
const STORAGE_KEY = 'theme-choice'

function readChoice() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'light') return stored
  } catch {
    /* storage unavailable */
  }
  return null
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  return readChoice() ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

/**
 * Theme state synced with the `.dark` class on <html>. Follows the OS color-scheme preference until the
 * visitor toggles; that choice is saved to localStorage (and remembered for the visit if storage is blocked).
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)
  const chose = useRef(typeof window !== 'undefined' && readChoice() !== null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Follow OS changes only until the visitor picks a theme explicitly.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      if (!chose.current) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    chose.current = true
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore write failures; the choice still holds for this visit */
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
