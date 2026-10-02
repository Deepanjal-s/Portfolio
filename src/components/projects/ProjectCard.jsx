import { useReveal } from '../../hooks/useReveal'

function initialsFor(title) {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function ProjectCard({
  title,
  description,
  tech = [],
  links = [],
  accent = 'accent',
  featured = false,
  delay = 0,
}) {
  const revealRef = useReveal()
  const techTags = tech.map((item) => (
    <li key={item}>
      <span className="projects-tag">{item}</span>
    </li>
  ))

  const linkItems = links.map((link) => (
    <li key={`${link.label}-${link.href}`}>
      <a
        className="projects-link"
        href={link.href}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {link.label}
        <span className="projects-link-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </li>
  ))

  return (
    <article
      ref={revealRef}
      className={`projects-card projects-card--${accent} reveal${featured ? ' projects-card--featured' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="projects-banner" aria-hidden="true">
        <span className="projects-banner-glyph">{initialsFor(title)}</span>
        <div className="projects-banner-shine" />
      </div>

      <div className="projects-card-body">
        <h3 className="projects-card-title">{title}</h3>
        <p className="projects-card-description">{description}</p>

        <ul className="projects-tag-list" aria-label="Project technologies">
          {techTags}
        </ul>

        {links.length > 0 ? (
          <ul className="projects-links" aria-label="Project links">
            {linkItems}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard
