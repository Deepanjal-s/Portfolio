import { SKILLS_CONTENT } from './skillsConfig'
import SkillCategory from './SkillCategory'
import SectionHeader from '../SectionHeader'
import './Skills.css'

const ACCENTS = ['accent', 'violet', 'fuchsia', 'sky']

function Skills() {
  const { eyebrow, title, description, categories } = SKILLS_CONTENT

  const categoryCards = categories.map((category, index) => (
    <SkillCategory
      key={category.id}
      title={category.title}
      skills={category.skills}
      accent={ACCENTS[index % ACCENTS.length]}
      featured={index === 0}
      delay={index * 90}
    />
  ))

  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-heading"
    >
      <div className="skills-orb skills-orb--one" aria-hidden="true" />
      <SectionHeader
        index="02"
        eyebrow={eyebrow}
        title={title}
        description={description}
        headingId="skills-heading"
      />

      <div className="skills-bento">{categoryCards}</div>
    </section>
  )
}

export default Skills
