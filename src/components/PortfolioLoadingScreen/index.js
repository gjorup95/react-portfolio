import './index.scss'
import ScrollAnimation from '../ScrollAnimation'
const PortfolioLoadingScreen = () => {
  return (
    <div className="grid-containerPortfolio">
      <div className="title">Portfolio</div>
      <div className="box-display">
        <ul className="animation-list">
          <li>ASP.NET Core</li>
          <li>Spring Framework</li>
          <li>Angular</li>
          <li>Software Design Patterns</li>
          <li>Docker</li>
          <li>User Research</li>
          <li>Unit Testing</li>
          <li>Prototyping</li>
          <li>Express - NodeJS</li>
          <li>Git</li>
          <li>REST API</li>
        </ul>
      </div>
      <div className="scrolling-indicator">
        <ScrollAnimation />
      </div>
    </div>
  )
}
export default PortfolioLoadingScreen
