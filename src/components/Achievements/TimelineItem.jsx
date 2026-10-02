import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'

function TimelineItem({
  icon,
  badge,
  title,
  organization,
  highlights,
  image,
  isLast,
  flip = false,
  delay = 0,
}) {
  const [hasError, setHasError] = useState(false)
  const revealRef = useReveal()

  const highlightItems = highlights.map((point) => (
    <li key={point} className="achievements-highlight">
      {point}
    </li>
  ))

  return (
    <li
      ref={revealRef}
      className={`achievements-timeline-item reveal${flip ? ' achievements-timeline-item--flip' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="achievements-timeline-marker" aria-hidden="true">
        <span className="achievements-timeline-dot">{icon}</span>
        {!isLast ? <span className="achievements-timeline-line" /> : null}
      </div>

      <article className="achievements-card">
        <div className="achievements-image-wrapper">
          <div className="achievements-image-frame">
            {hasError ? (
              <div className="achievements-image-fallback" aria-hidden="true">
                {image.fallback}
              </div>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="achievements-image"
                loading="lazy"
                onError={() => setHasError(true)}
              />
            )}
          </div>
        </div>

        <div className="achievements-card-content">
          <span className="achievements-badge">{badge}</span>
          <h3 className="achievements-card-title">{title}</h3>
          <p className="achievements-card-org">{organization}</p>
          <ul className="achievements-highlights">{highlightItems}</ul>
        </div>
      </article>
    </li>
  )
}

export default TimelineItem
