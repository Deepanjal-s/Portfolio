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
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const draft = () => {
    const name = formData.name.trim()
    return {
      subject: `Portfolio Contact from ${name}`,
      body: `Name: ${name}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`,
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
    setCopied(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!formData.name.trim() || !formData.message.trim()) {
      setError('Please fill in your name and a message.')
      return
    }

    const { subject, body } = draft()
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    // The draft stays in the form: without a mail app the link does nothing, and the visitor can copy it instead.
    setIsSubmitted(true)
  }

  const handleCopy = async () => {
    if (!formData.name.trim() || !formData.message.trim()) {
      setError('Please fill in your name and a message.')
      return
    }
    const { subject, body } = draft()
    try {
      await navigator.clipboard.writeText(`To: ${recipientEmail}\nSubject: ${subject}\n\n${body}`)
      setError('')
      setCopied(true)
    } catch {
      setError(`Copying failed. Please email ${recipientEmail} directly.`)
    }
  }

  return (
    // No `noValidate`: the browser enforces `required` and `type="email"`, so an
    // empty or malformed form never opens a blank email.
    <form className="contact-form" onSubmit={handleSubmit}>
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

      {error ? (
        <p className="contact-form-note" role="alert">
          {error}
        </p>
      ) : null}

      {isSubmitted ? (
        <p className="contact-form-note" role="status">
          Your email client should open shortly. If it does not,{' '}
          <button type="button" className="contact-copy" onClick={handleCopy}>
            copy the message
          </button>{' '}
          and send it to {recipientEmail}.{copied ? ' Copied.' : ''}
        </p>
      ) : null}
    </form>
  )
}

export default ContactForm
