import './index.scss'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { pageKey } from '../../utils/pageKey'

const HOME = '/react-portfolio'

const Header = () => {
  // NavLink's exact match treats "/react-portfolio/" as a different page, so compare normalised paths.
  const onLanding = pageKey(useLocation().pathname) === HOME

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main menu">
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
