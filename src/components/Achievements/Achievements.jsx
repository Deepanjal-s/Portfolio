import { ACHIEVEMENTS_CONTENT } from './achievementsConfig'
import TimelineItem from './TimelineItem'
import './Achievements.css'

function Achievements() {
  const { eyebrow, title, description, items } = ACHIEVEMENTS_CONTENT

  const timelineItems = items.map((item, index) => (
    <TimelineItem
      key={item.id}
      icon={item.icon}
      badge={item.badge}
      title={item.title}
      organization={item.organization}
      highlights={item.highlights}
      image={item.image}
      isLast={index === items.length - 1}
    />
  ))

  return (
    <section
      id="achievements"
      className="achievements-section"
      aria-labelledby="achievements-heading"
    >
      <header className="achievements-header">
        <p className="achievements-eyebrow">{eyebrow}</p>
        <h2 id="achievements-heading" className="achievements-title">
          {title}
        </h2>
        <p className="achievements-description">{description}</p>
      </header>

      <ol className="achievements-timeline">{timelineItems}</ol>
    </section>
  )
}

export default Achievements
