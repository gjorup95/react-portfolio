import './index.scss'
import { useId, useRef, type MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Project } from '../../data/projects'

const ProjectCard = ({ project }: { project: Project }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const { title, year, impact, image, contributions, technologies } = project

  const close = () => dialogRef.current?.close()
  // Clicks on the backdrop land on the <dialog> itself; clicks on content don't.
  const closeOnBackdrop = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) close()
  }

  return (
    <article className="panel project-card">
      <img className="project-card__image" src={image} alt="" loading="lazy" />
      <h3 className="project-card__title">{title}</h3>
      <span className="year-chip">{year}</span>
      <p className="project-card__impact">{impact}</p>
      <button
        type="button"
        className="text-button project-card__more"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        Show more<span className="sr-only"> about {title}</span>
      </button>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby={titleId}
        onClick={closeOnBackdrop}
      >
        <div className="project-dialog__body">
          <div className="project-dialog__header">
            <div>
              <h2 id={titleId}>{title}</h2>
              <span className="year-chip">{year}</span>
            </div>
            <button type="button" className="button button--secondary" onClick={close}>
              Close
            </button>
          </div>

          <img className="project-dialog__image" src={image} alt={`Screenshot of ${title}`} />

          <h3>Key contributions</h3>
          <ul className="project-dialog__list">
            {contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Technologies</h3>
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
        </div>
      </dialog>
    </article>
  )
}

export default ProjectCard
