import { BRAND, NAV_LINKS } from '../Navbar/navConfig'
import { HERO_SOCIALS } from '../Hero/heroConfig'

export const FOOTER_CONTENT = {
  brand: BRAND,
  tagline: 'NIT Sikkim CSE ’28 · Web applications, backend systems, and continuous learning.',
  quickLinks: NAV_LINKS.filter((link) => link.label !== 'Socials'),
  contact: {
    email: 'deepanjalshukla720@gmail.com',
    location: 'NIT Sikkim',
  },
  socials: HERO_SOCIALS,
  backToTop: {
    label: 'Back to top',
    href: '#home',
  },
  builtWith: 'Built with React & Tailwind CSS',
}
