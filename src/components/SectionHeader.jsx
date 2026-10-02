import Reveal from './Reveal'
import './SectionHeader.css'

/**
 * Editorial section header with an oversized ghost numeral backdrop,
 * e.g. "02 · Skills". Keeps the semantic h2 + description.
 */
function SectionHeader({ index, eyebrow, title, description, headingId }) {
  return (
    <Reveal as="header" className="section-header">
      <span className="section-ghost" aria-hidden="true">
        {index}
      </span>
      <p className="section-eyebrow">
        <span className="section-eyebrow-index">{index}</span>
        <span className="section-eyebrow-rule" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={headingId} className="section-title">
        {title}
      </h2>
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </Reveal>
  )
}

export default SectionHeader
