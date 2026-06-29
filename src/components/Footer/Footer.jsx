import { FOOTER_CONTENT } from './footerConfig'
import SocialIcon from '../Hero/SocialIcon'
import './Footer.css'

function Footer() {
  const { brand, tagline, quickLinks, contact, socials, backToTop, builtWith } =
    FOOTER_CONTENT

  const currentYear = new Date().getFullYear()

  const navItems = quickLinks.map((link) => (
    <li key={link.href}>
      <a href={link.href} className="footer-link">
        {link.label}
      </a>
    </li>
  ))

  const socialItems = socials.map(({ label, href, icon }) => (
    <li key={label}>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={label}
        className="footer-social-link"
      >
        <SocialIcon icon={icon} />
      </a>
    </li>
  ))

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <a href={brand.href} className="footer-brand-name">
              {brand.name}
            </a>
            <p className="footer-brand-tagline">{tagline}</p>
            <ul className="footer-socials">{socialItems}</ul>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-links">{navItems}</ul>
          </nav>

          <div>
            <h2 className="footer-heading">Get in Touch</h2>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <a
                  href={`mailto:${contact.email}`}
                  className="footer-contact-link"
                >
                  {contact.email}
                </a>
              </li>
              <li className="footer-contact-item">{contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-meta">
            <p className="footer-copyright">
              &copy; {currentYear} {brand.name}. All rights reserved.
            </p>
            <p className="footer-built-with">{builtWith}</p>
          </div>

          <a href={backToTop.href} className="footer-back-to-top">
            {backToTop.label}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
