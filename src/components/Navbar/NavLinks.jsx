import { NAV_LINKS } from './navConfig'

function NavLinks({ onNavigate, className = '', activeHref = '' }) {
  return (
    <ul className={`navbar-links ${className}`}>
      {NAV_LINKS.map(({ label, href }) => {
        const isActive = href === activeHref
        return (
          <li key={href}>
            <a
              href={href}
              onClick={onNavigate}
              aria-current={isActive ? 'page' : undefined}
              className={`navbar-link${isActive ? ' navbar-link--active' : ''}`}
            >
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
