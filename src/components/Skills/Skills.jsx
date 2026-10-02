import { SKILLS_CONTENT } from './skillsConfig'
import SkillCategory from './SkillCategory'
import Reveal from '../Reveal'
import './Skills.css'

function Skills() {
  const { eyebrow, title, description, categories } = SKILLS_CONTENT

  const categoryCards = categories.map((category, index) => (
    <SkillCategory
      key={category.id}
      title={category.title}
      skills={category.skills}
      delay={index * 80}
    />
  ))

  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-heading"
    >
      <Reveal as="header" className="skills-header">
        <p className="skills-eyebrow">{eyebrow}</p>
        <h2 id="skills-heading" className="skills-title">
          {title}
        </h2>
        <p className="skills-description">{description}</p>
      </Reveal>

      <div className="skills-grid">{categoryCards}</div>
    </section>
  )
}

export default Skills
