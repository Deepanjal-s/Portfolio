import { HERO_SOCIALS } from './heroConfig'
import SocialIcon from './SocialIcon'

function HeroSocials() {
  return (
    <div className="hero-socials">
      {HERO_SOCIALS.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className="hero-social-link"
        >
          <SocialIcon icon={icon} />
        </a>
      ))}
    </div>
  )
}

export default HeroSocials
