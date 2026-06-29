import { BRAND } from './navConfig'

function NavBrand({ onNavigate }) {
  return (
    <a
      href={BRAND.href}
      onClick={onNavigate}
      className="navbar-brand"
    >
      {BRAND.name}
    </a>
  )
}

export default NavBrand
