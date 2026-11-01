import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Project } from '../../data/projects'

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, year, image, contributions, technologies } = project

  return (
    <article className="panel project-card">
      <h3 className="project-card__title">{title}</h3>
      <span className="year-chip">{year}</span>
      <div className="project-card__media">
        <img className="project-card__image" src={image} alt={`Screenshot of ${title}`} loading="lazy" />
      </div>

      <h4 className="project-card__label">Key contributions</h4>
      <ul className="project-card__list">
        {contributions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="project-card__label">Technologies</h4>
      <div className="technology-container">
        {technologies.map((item, index) =>
          typeof item === 'string' ? (
            <img key={index} src={item} alt={`Technology ${index + 1}`} width="160" height="160" />
          ) : (
            <FontAwesomeIcon
              key={index}
              icon={item}
              className="technology-icon"
              aria-label={item.iconName}
            />
          )
        )}
      </div>
    </article>
  )
}

export default ProjectCard
