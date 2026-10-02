import { PROJECTS_CONTENT } from './projectsConfig'
import ProjectCard from './ProjectCard'
import Reveal from '../Reveal'
import './Projects.css'

function Projects() {
  const { eyebrow, title, description, items } = PROJECTS_CONTENT

  const cards = items.map((project, index) => (
    <ProjectCard
      key={project.id}
      title={project.title}
      description={project.description}
      tech={project.tech}
      links={project.links}
      delay={index * 90}
    />
  ))

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <Reveal as="header" className="projects-header">
        <p className="projects-eyebrow">{eyebrow}</p>
        <h2 id="projects-heading" className="projects-title">
          {title}
        </h2>
        <p className="projects-description">{description}</p>
      </Reveal>

      <div className="projects-grid">{cards}</div>
    </section>
  )
}

export default Projects
