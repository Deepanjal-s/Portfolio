import { SKILLS_CONTENT } from '../Skills/skillsConfig'

const KEYWORDS = SKILLS_CONTENT.categories.flatMap((category) => category.skills)

/**
 * Infinite scrolling strip of tech keywords along the hero's bottom edge.
 * Decorative only — hidden from assistive tech, static under reduced motion.
 */
function TechMarquee() {
  return (
    <div className="hero-marquee" aria-hidden="true">
      <div className="hero-marquee-fade hero-marquee-fade--left" />
      <div className="hero-marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="hero-marquee-group">
            {KEYWORDS.map((keyword) => (
              <span key={`${copy}-${keyword}`} className="hero-marquee-item">
                <span className="hero-marquee-star">✦</span>
                {keyword}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="hero-marquee-fade hero-marquee-fade--right" />
    </div>
  )
}

export default TechMarquee
