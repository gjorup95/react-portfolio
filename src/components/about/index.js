import AnimateLetters from '../AnimateLetters'
import './index.scss'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faJava,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import IsLoadingHOC from '../customLoader/IsLoadingHOC'

const About = (props) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const RENDER_DURATION = 3000
  const details = {
    about: 'Om mig',
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, RENDER_DURATION)
  }, [])

  const generateParagraphs = () => {
    return (
      <div>
        <p>
          Jeg er en ambitiøs fullstack udvikler med en øget interesse for
          webudvikling. Jeg har min baggrund fra Aarhus Universitet, hvor jeg er
          kandidat studerende i IT-Produktudvikling. Jeg søger i øjeblikket et
          job i IT-branchen med ønsket om at opnå nye erfaringer og styrke mine
          egne faglige kompetencer som udvikler.
        </p>
        <p>
          Jeg er selvstændig hvad angår min egen udvikling, og interesserer mig
          naturligt for at lære nye teknologier. Hvor jeg pt. er ved at
          integrere TypeScript i min personlige værktøjskasse.
        </p>
        <p>
          Som person er jeg udadvendt med en stor interesse for engagementet med
          end-users og jeg trives bedst i fællesskaber med muligheder for
          samarbejde og sparring. I min fritid nyder jeg at holde mig fysisk
          aktiv ved at dyrke diverse sportsgrene og pleje mit konkurrencegen.
        </p>
      </div>
    )
  }
  const generateSpinner = () => {
    return (
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faJava} color="#5382a1" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNode} color="#EFD81D" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimateLetters
            letterClass={letterClass}
            stringToAnimate={details.about}
            passedIndex={15}
          />
        </h1>

        {generateParagraphs()}
      </div>
      {generateSpinner()}
    </div>
  )
}

export default IsLoadingHOC(About, 'Loading...')
