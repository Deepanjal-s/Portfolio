function ProjectCard({ title, description, tech = [], links = [] }) {
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
      </a>
    </li>
  ))

  return (
    <article className="projects-card">
      <header className="projects-card-header">
        <h3 className="projects-card-title">{title}</h3>
      </header>

      <p className="projects-card-description">{description}</p>

      <ul className="projects-tag-list" aria-label="Project technologies">
        {techTags}
      </ul>

      {links.length > 0 ? (
        <ul className="projects-links" aria-label="Project links">
          {linkItems}
        </ul>
      ) : null}
    </article>
  )
}

export default ProjectCard

