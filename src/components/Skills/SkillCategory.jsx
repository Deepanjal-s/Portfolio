import { useReveal } from '../../hooks/useReveal'

function SkillCategory({ title, skills, accent = 'accent', featured = false, delay = 0 }) {
  const revealRef = useReveal()

  const skillTags = skills.map((skill) => (
    <li key={skill}>
      <span className="skills-tag">{skill}</span>
    </li>
  ))

  return (
    <article
      ref={revealRef}
      className={`skills-card skills-card--${accent} reveal${featured ? ' skills-card--featured' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="skills-card-glow" aria-hidden="true" />
      <span className="skills-card-index" aria-hidden="true">
        {String(skills.length).padStart(2, '0')}
      </span>
      <h3 className="skills-card-title">{title}</h3>
      <ul className="skills-tag-list" aria-label={`${title} skills`}>
        {skillTags}
      </ul>
    </article>
  )
}

export default SkillCategory
