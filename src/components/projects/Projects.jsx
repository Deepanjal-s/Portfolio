import { PROJECTS_CONTENT } from './projectsConfig'
import ProjectCard from './ProjectCard'
import SectionHeader from '../SectionHeader'
import './Projects.css'

const ACCENTS = ['accent', 'violet', 'fuchsia', 'sky']

function Projects() {
  const { eyebrow, title, description, items } = PROJECTS_CONTENT
  const [featured, ...rest] = items

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="projects-orb projects-orb--one" aria-hidden="true" />
      <SectionHeader
        index="03"
        eyebrow={eyebrow}
        title={title}
        description={description}
        headingId="projects-heading"
      />

      {featured ? (
        <ProjectCard
          key={featured.id}
          title={featured.title}
          description={featured.description}
          tech={featured.tech}
          links={featured.links}
          accent={ACCENTS[0]}
          featured
          delay={0}
        />
      ) : null}

      <div className="projects-bento">
        {rest.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            links={project.links}
            accent={ACCENTS[(index + 1) % ACCENTS.length]}
            delay={(index + 1) * 90}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
