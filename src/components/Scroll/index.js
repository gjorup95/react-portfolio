import './index.scss'

import ScrollableContainer from '../ScrollableContainer'

import React from 'react'
import PortfolioLoadingScreen from '../PortfolioLoadingScreen'
import Portfolio from '../Portfolio'
import { faBootstrap, faJava, faJs } from '@fortawesome/free-brands-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons/faAngular'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft'


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
                     ]} projectTitle={"Producentansvarsregisteret"} year={"2024 – Present"} technologies={[faAngular, faMicrosoft, faJs ]}>
          </Portfolio>

          <Portfolio imageSrc="https://placehold.co/600x400"
                     contributions={[
                       "Implemented responsive UI",
                       "Optimized backend performance",
                       "Integrated third-party APIs",
                     ]} projectTitle={"Digital tinglysning"} year={"2023 – 2024"} technologies={[faJava, faAngular, faBootstrap]}>>
          </Portfolio>

          <Portfolio imageSrc="https://placehold.co/600x400"
                     contributions={[
                       "Implemented responsive UI",
                       "Optimized backend performance",
                       "Integrated third-party APIs",
                     ]} projectTitle={"MitDK"} year={"2023 – 2023"} technologies={[faJava, faAngular, faBootstrap]}>>
          </Portfolio>

        </ScrollableContainer>
      </>
    );
  }
}
export default ScrollPage
