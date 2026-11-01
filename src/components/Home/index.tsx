import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import AnimateLetters from '../AnimateLetters'
import ProjectCard from '../ProjectCard'
import { projects, tools } from '../../data/projects'
import profilePhoto from '../../assets/images/pic-logo511.png'

const NAME = 'Troels Berthel Gjørup'
const TITLE = ['Fullstack Developer', '& Solution Architect']

const Home = () => {
  return (
    <div className="landing">
      <section className="hero">
        <img className="hero__photo" src={profilePhoto} alt="Portrait of Troels Berthel Gjørup" draggable={false} />
        <h1 className="hero__heading">
          <span className="hero__name">{NAME}</span>
          <span className="hero__title">
            <span className="hero__title-line">
              <AnimateLetters text={TITLE[0]} />
            </span>
            <span className="hero__title-line">
              <AnimateLetters text={TITLE[1]} startIndex={TITLE[0].length} />
            </span>
          </span>
        </h1>
        <ul className="tag-list tag-list--highlight hero__tools" aria-label="Tools">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <div className="landing__content">
        <section className="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">
            Projects
          </h2>
          {projects.map((project) => (
            <div key={project.title} className="projects__item">
              <ProjectCard project={project} />
              {project.quote && (
                <figure className="project-quote">
                  <blockquote>“{project.quote.text}”</blockquote>
                  <figcaption>
                    {project.quote.name}, {project.quote.role}
                  </figcaption>
                </figure>
              )}
            </div>
          ))}
        </section>

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
