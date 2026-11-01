import { NavLink, Link } from 'react-router-dom'
import './index.scss'
import profileLogo from '../../assets/images/pic-logo511.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/react-portfolio" aria-label="Forside">
        <img src={profileLogo} alt="" draggable={false} />
      </Link>
      <nav className="sidebar" aria-label="Hovedmenu">
        <NavLink to="/react-portfolio" end aria-label="Forside">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink className="about-link" to="/react-portfolio/about" aria-label="Om mig">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink className="contact-link" to="/react-portfolio/contact" aria-label="Kontakt">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <NavLink className="portfolio-link" to="/react-portfolio/portfolio" aria-label="Portfolio">
          <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>
      </nav>
      <ul className="social-links">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/troels-hune-gj%C3%B8rup-88566410b/"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gjorup95"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
