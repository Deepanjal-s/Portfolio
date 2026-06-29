import { useState, useEffect } from 'react'
import NavBrand from './NavBrand'
import NavLinks from './NavLinks'
import MobileMenuButton from './MobileMenuButton'
import MobileMenu from './MobileMenu'
import './Navbar.css'

const DESKTOP_MEDIA_QUERY = '(min-width: 48rem)'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const handleNavigate = () => {
    closeMobileMenu()
  }

  const onToggle = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }
  
  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MEDIA_QUERY)

    const handleViewPortChange = (event) => {
      if(event.matchs){
        setIsMobileMenuOpen(false)
      }
    } 

    media.addEventListener('change',handleViewPortChange)
    return () => media.removeEventListener('change', handleViewPortChange)
},[])

  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <NavBrand onNavigate={handleNavigate} />

        <NavLinks
          onNavigate={handleNavigate}
          className="navbar-links--desktop"
        />

        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onNavigate={handleNavigate}
      />
    </header>
  )
}

export default Navbar
