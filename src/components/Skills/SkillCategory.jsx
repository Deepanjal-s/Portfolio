function SkillCategory({ title, skills }) {
  const skillTags = skills.map((skill) => (
    <li key={skill}>
      <span className="skills-tag">{skill}</span>
    </li>
  ))

  return (
    <article className="skills-category">
      <h3 className="skills-category-title">{title}</h3>
      <ul className="skills-tag-list" aria-label={`${title} skills`}>
        {skillTags}
      </ul>
    </article>
  )
}

export default SkillCategory
