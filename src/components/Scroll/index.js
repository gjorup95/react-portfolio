import './index.scss'

import ScrollableContainer from '../ScrollableContainer'

import React from 'react'
import PortfolioLoadingScreen from '../PortfolioLoadingScreen'
import Portfolio from '../Portfolio'
import {faJava, faReact } from '@fortawesome/free-brands-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons/faAngular'
import mitDKImage from '../../assets/images/MitDK.png'
import logoKeycloak from '../../assets/images/svg/Logo_of_Keycloak.svg'
import mySqlLogo from '../../assets/images/svg/mysqlLogo.svg'
import { logoAspNet } from '../../utils/FontAwesomeIcons'
import sentryLogo from '../../assets/images/svg/springLogo.svg'
import digitalTinglysningImage from '../../assets/images/DigitalTinglysningNew.png'
import par2Image from '../../assets/images/Par2.png'

class ScrollPage extends React.Component {
  render() {
    return (
      <>
        <ScrollableContainer>
          <section id="part1">
            <PortfolioLoadingScreen />
          </section>
          <Portfolio imageSrc={par2Image}
                     contributions={[
                       "Setup Nemlogin with keycloak and allocated privileges for role based access control",
                       "Integrated with 3rd party vendors and setup endpoints for authorized external data access",
                       "Developed a new feature for creating, storing and accessing business agreements between eligible parties",
                     ]} projectTitle={"Producentansvarsregisteret"} year={"2024 – Present"} technologies={[faAngular, logoAspNet, logoKeycloak ]}>
          </Portfolio>

          <Portfolio imageSrc={digitalTinglysningImage}
                     contributions={[
                       "Developed new, responsive, WCAG compatible document types for user completion of legal documents",
                       "Created 3rd party integration, with event-based publishing of internal documents for public access",
                       "Developed a new case handling flow with pagination, searching and filtering with angular and ngrx store",
                     ]} projectTitle={"Digital tinglysning"} year={"2023 – 2024"} technologies={[faJava, faAngular, mySqlLogo]}>>
          </Portfolio>

          <Portfolio imageSrc={mitDKImage}
          contributions={[
                       "Synchronised public and private user types for a unified mail experience",
                       "Developed new customizable forms for company user research",
                       "Sentry/Kibana log monitoring and debugging across microservices and react native app",
                     ]} projectTitle={"MitDK"} year={"2023 – 2023"} technologies={[faJava, faReact, sentryLogo]}>>
          </Portfolio>

        </ScrollableContainer>
      </>
    );
  }
}
export default ScrollPage
