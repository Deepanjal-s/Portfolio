import { useReveal } from '../../hooks/useReveal'

function SkillCategory({ title, skills, delay = 0 }) {
  const revealRef = useReveal()

  const skillTags = skills.map((skill) => (
    <li key={skill}>
      <span className="skills-tag">{skill}</span>
    </li>
  ))

  return (
    <article
      ref={revealRef}
      className="skills-category reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="skills-category-title">{title}</h3>
      <ul className="skills-tag-list" aria-label={`${title} skills`}>
        {skillTags}
      </ul>
    </article>
  )
}

export default SkillCategory
