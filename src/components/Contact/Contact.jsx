import { CONTACT_CONTENT } from './contactConfig'
import ContactInfo from './ContactInfo'
import ContactSocials from './ContactSocials'
import ContactForm from './ContactForm'
import './Contact.css'

function Contact() {
  const { eyebrow, title, description, availability, methods } = CONTACT_CONTENT

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <header className="contact-header">
        <p className="contact-eyebrow">{eyebrow}</p>
        <h2 id="contact-heading" className="contact-title">
          {title}
        </h2>
        <p className="contact-description">{description}</p>
      </header>

      <div className="contact-grid">
        <div className="contact-panel">
          <ContactInfo availability={availability} methods={methods} />
          <ContactSocials />
        </div>

        <div className="contact-form-card">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
