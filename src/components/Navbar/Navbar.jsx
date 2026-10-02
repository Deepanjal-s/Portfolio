import { useState, useEffect } from 'react'
import NavBrand from './NavBrand'
import NavLinks from './NavLinks'
import MobileMenuButton from './MobileMenuButton'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS } from './navConfig'
import { useTheme } from '../../hooks/useTheme'
import './Navbar.css'

const DESKTOP_MEDIA_QUERY = '(min-width: 48rem)'
const SCROLL_THRESHOLD = 8

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const { theme, toggleTheme } = useTheme()

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const handleNavigate = () => {
    closeMobileMenu()
  }

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MEDIA_QUERY)

    const handleViewPortChange = (event) => {
      if (event.matches) {
        setIsMobileMenuOpen(false)
      }
    }

    media.addEventListener('change', handleViewPortChange)
    return () => media.removeEventListener('change', handleViewPortChange)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.getElementById(href.replace('#', '')),
    ).filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`navbar-header${isScrolled ? ' navbar-header--scrolled' : ''}`}>
      <div className="navbar-float">
        <nav className="navbar-pill" aria-label="Primary">
          <NavBrand onNavigate={handleNavigate} />

          <NavLinks
            onNavigate={handleNavigate}
            className="navbar-links--desktop"
            activeHref={activeSection}
          />

          <div className="navbar-actions">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </div>
        </nav>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onNavigate={handleNavigate}
          activeHref={activeSection}
        />
      </div>
    </header>
  )
}

export default Navbar
