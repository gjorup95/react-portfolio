import './index.scss'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { pageKey } from '../../utils/pageKey'
import profileLogo from '../../assets/images/pic-logo511.png'

const HOME = '/react-portfolio'

const Header = () => {
  // NavLink's exact match treats "/react-portfolio/" as a different page, so compare normalised paths.
  const onLanding = pageKey(useLocation().pathname) === HOME

  return (
    <header className="site-header">
      <Link className="logo" to={HOME} aria-label="Forside">
        <img src={profileLogo} alt="" draggable={false} />
      </Link>
      <nav className="site-nav" aria-label="Hovedmenu">
        <Link to={HOME} className={onLanding ? 'active' : undefined} aria-current={onLanding ? 'page' : undefined}>
          Portfolio
        </Link>
        <NavLink to="/react-portfolio/about">About</NavLink>
        <NavLink to="/react-portfolio/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
