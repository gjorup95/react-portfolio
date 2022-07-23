import AnimateLetters from '../AnimateLetters'
import React, { useState, useEffect } from 'react'
import Spinner from '../spinner'
import IsLoadingHOC from '../customLoader/IsLoadingHOC'
import { motion } from 'framer-motion'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const RENDER_DURATION = 3000
  const details = {
    about: 'Om mig',
  }

  const transition = {
    enter: {
      scale: 0.75,
      opacity: 0.25,
    },
    animate: {
      scale: 1,
      transition: { delay: 0.9, ease: 'easeInOut', duration: 0.3 },
      opacity: 1,
    },
    exit: {
      opacity: [1, 0.75, 0],
      scale: [1, 0.75, 0.75],
      x: [0, 0, 1200],
      transition: { duration: 0.7, times: [0, 0.3, 0.5] },
    },
  }
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, RENDER_DURATION)
  }, [])

  const generateParagraphs = () => {
    return (
      <div className="text-block">
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

  return (
    <motion.div
      className="motionAbout"
      initial="enter"
      animate="animate"
      exit="exit"
      variants={transition}
    >
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
        <Spinner />
      </div>
    </motion.div>
  )
}

export default IsLoadingHOC(About, 'Loading...')
