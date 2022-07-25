import './index.scss'
const PortfolioLoadingScreen = () => {
  return (
    <div className="flex-containerPortfolio">
      <h1 className="portfolio-headline">Portfolio</h1>
      <div className="box-display">
        <ul className="animation-list">
          <li className="item-1">Design Patterns</li>
          <li className="item-2">Docker</li>
          <li className="item-3">User Research</li>
          <li className="item-4">Unit Testing</li>
          <li className="item-5">Prototyping</li>
          <li className="item-6">Design Patterns</li>
        </ul>
      </div>
      <div className="scrolling-indicator">HEJ</div>
    </div>
  )
}
export default PortfolioLoadingScreen
