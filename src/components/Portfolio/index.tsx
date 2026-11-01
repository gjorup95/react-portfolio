import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

/** An image URL, or a Font Awesome icon definition. */
export type Technology = string | IconDefinition

type PortfolioProps = {
  imageSrc: string
  contributions: string[]
  projectTitle: string
  year: string
  technologies?: Technology[]
}

const Portfolio = ({
  imageSrc,
  contributions,
  projectTitle,
  year,
  technologies,
}: PortfolioProps) => {
  return (
    <div className="grid-container-portfolio">
      <div className="text-container">
        <div className="title-container">
          <h1 className="title-unique">{projectTitle}</h1>
          <h2 className="subtitle-year">{year}</h2>
        </div>
        <div className="image-container">
          <img src={imageSrc} className="rounded-image" alt="Project" />
        </div>

        <h2 className="override-h2">Key Contributions</h2>
        <ul className="override-ul">
          {contributions.map((item, index) => (
            <li className="override-li" key={index}>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="override-h2">Technologies</h2>
        <div className="technology-container">
          {technologies?.map((item, index) => {
            if (typeof item === 'string') {
              return (
                <img
                  key={index}
                  src={item}
                  alt={`Technology ${index}`}
                  width="160"
                  height="160"
                />
              )
            }
            return (
              <FontAwesomeIcon
                icon={item}
                className="technology-icon"
                aria-label={`technologies ${index}`}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Portfolio
