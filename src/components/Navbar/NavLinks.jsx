import { NAV_LINKS } from './navConfig'

function NavLinks({ onNavigate, className = '' }) {
  return (
    <ul className={`navbar-links ${className}`}>
      {NAV_LINKS.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            onClick={onNavigate}
            className="navbar-link"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
