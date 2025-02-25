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
            <PortfolioLoadingScreen />
          </section>
          <Portfolio imageSrc="https://placehold.co/600x400"
                     contributions={[
                       "Implemented responsive UI",
                       "Optimized backend performance",
                       "Integrated third-party APIs",
                     ]}></Portfolio>

        </ScrollableContainer>
      </>
    );
  }
}
export default ScrollPage
