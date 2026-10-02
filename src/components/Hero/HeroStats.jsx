import { PROJECTS_CONTENT } from '../projects/projectsConfig'
import { SKILLS_CONTENT } from '../Skills/skillsConfig'

const TOTAL_SKILLS = SKILLS_CONTENT.categories.reduce(
  (count, category) => count + category.skills.length,
  0,
)

/**
 * Quick-facts row under the hero intro: study year, university,
 * projects shipped and technologies used — all derived from config.
 */
function HeroStats() {
  const stats = [
    { value: '3rd Year', label: 'CSE Undergraduate' },
    { value: 'NIT Sikkim', label: 'University' },
    { value: String(PROJECTS_CONTENT.items.length), label: 'Projects Built' },
    { value: `${TOTAL_SKILLS}+`, label: 'Technologies' },
  ]

  return (
    <dl className="hero-stats hero-enter" aria-label="Quick facts">
      {stats.map(({ value, label }) => (
        <div key={label} className="hero-stat">
          <dt className="sr-only">{label}</dt>
          <dd className="hero-stat-value" aria-hidden="true">
            {value}
          </dd>
          <dd className="hero-stat-label" aria-hidden="true">
            {label}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default HeroStats
