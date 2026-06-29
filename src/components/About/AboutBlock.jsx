function AboutBlock({ title, children, className = '' }) {
  return (
    <article className={`about-block ${className}`.trim()}>
      <h3 className="about-block-title">{title}</h3>
      <div className="about-block-content">{children}</div>
    </article>
  )
}

export default AboutBlock
