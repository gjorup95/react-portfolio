import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faAngular, faJava, faReact } from '@fortawesome/free-brands-svg-icons'
import { logoAspNet } from '../utils/FontAwesomeIcons'
import par2Image from '../assets/images/par2.png'
import digitalTinglysningImage from '../assets/images/DigitalTinglysningNew.png'
import mitDKImage from '../assets/images/MitDK.png'
import logoKeycloak from '../assets/images/svg/Logo_of_Keycloak.svg'
import mySqlLogo from '../assets/images/svg/mysqlLogo.svg'
import springLogo from '../assets/images/svg/springLogo.svg'

/** An image URL, or a Font Awesome icon definition. */
export type Technology = string | IconDefinition

export type Project = {
  title: string
  year: string
  /** One line shown on the card: the action and what it achieved. */
  impact: string
  image: string
  contributions: string[]
  technologies: Technology[]
}

export const projects: Project[] = [
  {
    // Soft hyphen: the word is wider than a card, so let it break at the compound boundary.
    title: 'Producentansvars\u00ADregisteret',
    year: '2024 – Present',
    impact: 'Secured access for producers with NemLog-in, Keycloak and role-based permissions.',
    image: par2Image,
    contributions: [
      'Setup Nemlogin with keycloak and allocated privileges for role based access control',
      'Integrated with 3rd party vendors and setup endpoints for authorized external data access',
      'Developed a new feature for creating, storing and accessing business agreements between eligible parties',
    ],
    technologies: [faAngular, logoAspNet, logoKeycloak],
  },
  {
    title: 'Digital tinglysning',
    year: '2023 – 2024',
    impact: 'Built responsive, WCAG-compliant legal document forms.',
    image: digitalTinglysningImage,
    contributions: [
      'Developed new, responsive, WCAG compatible document types for user completion of legal documents',
      'Created 3rd party integration, with event-based publishing of internal documents for public access',
      'Developed a new case handling flow with pagination, searching and filtering with angular and ngrx store',
    ],
    technologies: [faJava, faAngular, mySqlLogo],
  },
  {
    title: 'MitDK',
    year: '2023',
    impact: 'Unified the mail experience for public and private users.',
    image: mitDKImage,
    contributions: [
      'Synchronised public and private user types for a unified mail experience',
      'Developed new customizable forms for company user research',
      'Sentry/Kibana log monitoring and debugging across microservices and react native app',
    ],
    technologies: [faJava, faReact, springLogo],
  },
]

export const tools = [
  'Java & Spring',
  'C# & ASP.NET Core',
  'Angular',
  'React',
  'TypeScript',
  'Node.js & Express',
  'REST APIs',
  'Keycloak',
  'MySQL',
  'Docker',
  'Git',
  'Unit testing',
]
