import { useState } from 'react'
import { CONTACT_CONTENT } from './contactConfig'

const INITIAL_FORM = {
  name: '',
  email: '',
  message: '',
}

function ContactForm() {
  const { form, methods } = CONTACT_CONTENT
  const recipientEmail = methods.find((m) => m.id === 'email')?.value ?? ''

  const [formData, setFormData] = useState(INITIAL_FORM)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`
    setIsSubmitted(true)
    setFormData(INITIAL_FORM)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <label htmlFor="contact-name" className="contact-label">
          {form.nameLabel}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={form.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email" className="contact-label">
          {form.emailLabel}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={form.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message" className="contact-label">
          {form.messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder={form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
        />
      </div>

      <button type="submit" className="contact-submit">
        {form.submitLabel}
      </button>

      {isSubmitted ? (
        <p className="contact-form-note" role="status">
          Your email client should open shortly. If it does not, email me directly.
        </p>
      ) : null}
    </form>
  )
}

export default ContactForm
