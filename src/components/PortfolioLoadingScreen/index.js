import './index.scss'
const PortfolioLoadingScreen = () => {
  return (
    <div className="grid-containerPortfolio">
      <div className="title">Portfolio</div>
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
      <div className="scrolling-indicator"></div>
    </div>
  )
}
export default PortfolioLoadingScreen
