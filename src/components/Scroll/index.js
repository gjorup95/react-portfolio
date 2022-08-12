import './index.scss'

import ScrollableContainer from '../ScrollableContainer'

import React from 'react'
import PortfolioLoadingScreen from '../PortfolioLoadingScreen'
import Portfolio from '../Portfolio'

class ScrollPage extends React.Component {
  render() {
    return (
      <>
        <ScrollableContainer>
          <section id="part1">
            <PortfolioLoadingScreen></PortfolioLoadingScreen>
          </section>
          <section id="part2">
            <Portfolio></Portfolio>
          </section>
          <section id="part3">
            <Portfolio></Portfolio>
          </section>
          <section id="part4">
            <Portfolio></Portfolio>
          </section>
        </ScrollableContainer>
      </>
    )
  }
}
export default ScrollPage
