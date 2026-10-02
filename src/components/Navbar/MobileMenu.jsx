import NavLinks from './NavLinks'

function MobileMenu({ isOpen, onNavigate, activeHref = '' }) {
  if (!isOpen) return null

  return (
    <div
      id="mobile-menu"
      className="navbar-mobile-menu"
    >
      <NavLinks
        onNavigate={onNavigate}
        className="navbar-links--mobile"
        activeHref={activeHref}
      />
    </div>
  )
}

export default MobileMenu
