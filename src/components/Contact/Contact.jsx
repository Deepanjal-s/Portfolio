import { CONTACT_CONTENT } from './contactConfig'
import ContactInfo from './ContactInfo'
import ContactSocials from './ContactSocials'
import ContactForm from './ContactForm'
import Reveal from '../Reveal'
import './Contact.css'

function Contact() {
  const { eyebrow, description, availability, methods } = CONTACT_CONTENT

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <Reveal className="contact-panel">
        <div className="contact-panel-decor" aria-hidden="true">
          <div className="contact-orb contact-orb--one" />
          <div className="contact-orb contact-orb--two" />
        </div>

        <div className="contact-panel-inner">
          <p className="contact-eyebrow">
            <span className="font-display">05</span>
            <span className="contact-eyebrow-rule" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="contact-heading" className="contact-title">
            Let&apos;s build something <span className="contact-title-accent">together</span>
          </h2>
          <p className="contact-description">{description}</p>

          <div className="contact-grid">
            <div className="contact-info-col">
              <ContactInfo availability={availability} methods={methods} />
              <ContactSocials />
            </div>

            <div className="contact-form-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
