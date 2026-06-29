import { PROJECTS_CONTENT } from './projectsConfig'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
  const { eyebrow, title, description, items } = PROJECTS_CONTENT

  const cards = items.map((project) => (
    <ProjectCard
      key={project.id}
      title={project.title}
      description={project.description}
      tech={project.tech}
      links={project.links}
    />
  ))

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <header className="projects-header">
        <p className="projects-eyebrow">{eyebrow}</p>
        <h2 id="projects-heading" className="projects-title">
          {title}
        </h2>
        <p className="projects-description">{description}</p>
      </header>

      <div className="projects-grid">{cards}</div>
    </section>
  )
}

export default Projects

