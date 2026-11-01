import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import AnimateLetters from '../AnimateLetters'
import ProjectCard from '../ProjectCard'
import { projects, tools } from '../../data/projects'
import { reviews } from '../../data/reviews'

const NAME = 'Troels Berthel Gjørup'
const ROLES = ['Problem solver', 'Tinkerer', 'Requirement churner']

const Home = () => {
  return (
    <div className="landing">
      <section className="hero">
        <h1 className="hero__name">
          <AnimateLetters text={NAME} />
        </h1>
        <ul className="tag-list tag-list--highlight hero__roles" aria-label="Roles">
          {ROLES.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>

      <div className="landing__content">
        <section id="projects" className="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">
            Projects
          </h2>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </section>

        <div className="extras">
          <section className="panel tools" aria-labelledby="tools-heading">
            <h2 id="tools-heading">Tools</h2>
            <ul className="tag-list">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>

          <section className="panel reviews" aria-labelledby="reviews-heading">
            <h2 id="reviews-heading">Reviews from colleagues &amp; clients</h2>
            {reviews.length === 0 ? (
              <p className="reviews__empty">Recommendations from colleagues and clients will appear here.</p>
            ) : (
              <div className="reviews__list">
                {reviews.map((review) => (
                  <figure key={review.name} className="review">
                    <blockquote>{review.quote}</blockquote>
                    <figcaption>
                      <strong>{review.name}</strong>
                      <span>{review.role}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        </div>

        <footer className="landing__links">
          <a
            href="https://drive.google.com/file/d/1-CQXSsjW_gzq6b3GGp0xWTYKImB9YWHX/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFileArrowDown} /> Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/troels-hune-gj%C3%B8rup-88566410b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
          </a>
          <a href="https://github.com/gjorup95" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </footer>
      </div>
    </div>
  )
}
export default Home
