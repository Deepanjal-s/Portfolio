import { CONTACT_CONTENT } from './contactConfig'
import ContactInfo from './ContactInfo'
import ContactSocials from './ContactSocials'
import ContactForm from './ContactForm'
import Reveal from '../Reveal'
import './Contact.css'

function Contact() {
  const { eyebrow, title, description, availability, methods } = CONTACT_CONTENT

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <Reveal as="header" className="contact-header">
        <p className="contact-eyebrow">{eyebrow}</p>
        <h2 id="contact-heading" className="contact-title">
          {title}
        </h2>
        <p className="contact-description">{description}</p>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-panel" delay={80}>
          <ContactInfo availability={availability} methods={methods} />
          <ContactSocials />
        </Reveal>

        <Reveal className="contact-form-card" delay={160}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
