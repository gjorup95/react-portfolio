import './index.scss'

import ScrollableContainer from '../ScrollableContainer'

import React from 'react'
import PortfolioLoadingScreen from '../PortfolioLoadingScreen'
import Portfolio from '../Portfolio'
import { faBootstrap, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons/faAngular'
import mitDKImage from '../../assets/images/MitDK.png'
import logoKeycloak from '../../assets/images/svg/Logo_of_Keycloak.svg'
import mySqlLogo from '../../assets/images/svg/mysqlLogo.svg'
import { logoAspNet } from '../../utils/FontAwesomeIcons'
import sentryLogo from '../../assets/images/svg/springLogo.svg'

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
                     ]} projectTitle={"Producentansvarsregisteret"} year={"2024 – Present"} technologies={[faAngular, logoAspNet, logoKeycloak ]}>
          </Portfolio>

          <Portfolio imageSrc="https://placehold.co/600x400"
                     contributions={[
                       "Implemented responsive UI",
                       "Optimized backend performance",
                       "Integrated third-party APIs",
                     ]} projectTitle={"Digital tinglysning"} year={"2023 – 2024"} technologies={[faJava, faAngular, mySqlLogo]}>>
          </Portfolio>

          <Portfolio imageSrc={mitDKImage}
          contributions={[
                       "Implemented responsive UI",
                       "Optimized backend performance",
                       "Integrated third-party APIs",
                     ]} projectTitle={"MitDK"} year={"2023 – 2023"} technologies={[faJava, faReact, sentryLogo]}>>
          </Portfolio>

        </ScrollableContainer>
      </>
    );
  }
}
export default ScrollPage
