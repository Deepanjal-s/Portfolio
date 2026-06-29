import { SKILLS_CONTENT } from './skillsConfig'
import SkillCategory from './SkillCategory'
import './Skills.css'

function Skills() {
  const { eyebrow, title, description, categories } = SKILLS_CONTENT

  const categoryCards = categories.map((category) => (
    <SkillCategory
      key={category.id}
      title={category.title}
      skills={category.skills}
    />
  ))

  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-heading"
    >
      <header className="skills-header">
        <p className="skills-eyebrow">{eyebrow}</p>
        <h2 id="skills-heading" className="skills-title">
          {title}
        </h2>
        <p className="skills-description">{description}</p>
      </header>

      <div className="skills-grid">{categoryCards}</div>
    </section>
  )
}

export default Skills
