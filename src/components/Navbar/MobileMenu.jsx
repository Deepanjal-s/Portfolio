import NavLinks from './NavLinks'

function MobileMenu({ isOpen, onNavigate }) {
  if (!isOpen) return null

  return (
    <div
      id="mobile-menu"
      className="navbar-mobile-menu"
    >
      <NavLinks
        onNavigate={onNavigate}
        className="navbar-links--mobile"
      />
    </div>
  )
}

export default MobileMenu
