import { ABOUT_CONTENT } from './aboutConfig'
import AboutBlock from './AboutBlock'
import Reveal from '../Reveal'
import './About.css'

function About() {
  const {
    eyebrow,
    title,
    introduction,
    education,
    skills,
    interests,
    goals,
    cta,
  } = ABOUT_CONTENT


  const skillsItems = skills.items.map((skill) => {
    return (
      <li key={skill}>
        <span className='about-skill-tag'>{skill}</span>
      </li> 
    )
  })

  const interestItems = interests.items.map((interest) => (
    <li key={interest}>
      <span className='about-interest-item'>
        <span className='about-interest-dot' aria-hidden="true" />
        {interest}
      </span>
    </li>
  ))

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <Reveal as="header" className="about-header">
        <p className="about-eyebrow">{eyebrow}</p>
        <h2 id="about-heading" className="about-title">
          {title}
        </h2>
      </Reveal>

      <Reveal>
        <p className="about-intro">{introduction}</p>
      </Reveal>
      
      <Reveal className="about-grid" delay={80}>
        <AboutBlock title={education.title}>
          <p>{education.description}</p>
        </AboutBlock>

        <AboutBlock title={skills.title}>
          <p>{skills.description}</p>
          <ul className="about-skills-list" aria-label="Technical skills">
            {skillsItems}
          </ul>
        </AboutBlock>
      </Reveal>

      <Reveal className="about-grid" delay={120}>
        <AboutBlock title={interests.title}>
          <p>{interests.description}</p>
          <ul className="about-interests-list" aria-label="Personal interests">
            {interestItems}
          </ul>
        </AboutBlock>

        <AboutBlock title={goals.title} className="about-block--highlight">
          <p>{goals.description}</p>
        </AboutBlock>
      </Reveal>

      <Reveal delay={160}>
        <a href={cta.href} className="about-cta">
          {cta.label}
        </a>
      </Reveal>
    </section>
  )
}

export default About
