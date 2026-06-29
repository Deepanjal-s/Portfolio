function ContactMethodIcon({ icon }) {
  switch (icon) {
    case 'email':
      return (
        <svg className="contact-method-icon" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    case 'location':
      return (
        <svg className="contact-method-icon" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    default:
      return null
  }
}

function ContactInfo({ availability, methods }) {
  const methodItems = methods.map((method) => (
    <li key={method.id} className="contact-method">
      <span className="contact-method-icon-wrap" aria-hidden="true">
        <ContactMethodIcon icon={method.icon} />
      </span>
      <div className="contact-method-content">
        <p className="contact-method-label">{method.label}</p>
        {method.href ? (
          <a href={method.href} className="contact-method-value contact-method-link">
            {method.value}
          </a>
        ) : (
          <p className="contact-method-value">{method.value}</p>
        )}
      </div>
    </li>
  ))

  return (
    <div className="contact-info">
      <p className="contact-availability">{availability}</p>
      <ul className="contact-methods">{methodItems}</ul>
    </div>
  )
}

export default ContactInfo
