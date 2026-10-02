import { ACHIEVEMENTS_CONTENT } from './achievementsConfig'
import TimelineItem from './TimelineItem'
import SectionHeader from '../SectionHeader'
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
      flip={index % 2 === 1}
      delay={index * 80}
    />
  ))

  return (
    <section
      id="achievements"
      className="achievements-section"
      aria-labelledby="achievements-heading"
    >
      <div className="achievements-orb achievements-orb--one" aria-hidden="true" />
      <SectionHeader
        index="04"
        eyebrow={eyebrow}
        title={title}
        description={description}
        headingId="achievements-heading"
      />

      <ol className="achievements-timeline">{timelineItems}</ol>
    </section>
  )
}

export default Achievements
