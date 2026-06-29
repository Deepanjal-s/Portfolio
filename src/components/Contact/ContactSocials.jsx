import { CONTACT_CONTENT } from './contactConfig'
import SocialIcon from '../Hero/SocialIcon'

function ContactSocials() {
  const { title, items } = CONTACT_CONTENT.socials

  const socialLinks = items.map(({ label, href, icon }) => (
    <li key={label}>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={label}
        className="contact-social-link"
      >
        <SocialIcon icon={icon} />
        <span>{label}</span>
      </a>
    </li>
  ))

  return (
    <div id="socials" className="contact-socials" aria-labelledby="contact-socials-heading">
      <h3 id="contact-socials-heading" className="contact-socials-title">
        {title}
      </h3>
      <ul className="contact-socials-list">{socialLinks}</ul>
    </div>
  )
}

export default ContactSocials
