import './index.scss'
import { Link } from 'react-router-dom'
import AnimateLetters from '../AnimateLetters'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [render, setRender] = useState(false)
  const user = {
    name: 'Troels Gjørup',
    about: 'Fullstack Developer.',
    abilities: 'Front- & Backend / Javascript / Java',
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
      setRender(true)
    }, 2700)
  }, [])

  const helper = () => {
    if (render) {
      return (
        <>
          <h2>{user.abilities}</h2>
          <div className="button-container">
            <Link to="/react-portfolio/contact" className="flat-button">
              KONTAKT MIG
            </Link>
            <Link
              to="/robots.txt"
              target="_blank"
              className="flat-button"
              download
            >
              HENT CV
            </Link>
          </div>
        </>
      )
    }
  }

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1 className="name-header">
          <AnimateLetters
            letterClass={letterClass}
            stringToAnimate={user.name}
            passedIndex={0}
          />
          <br />
          <span className="position-header">
            <AnimateLetters
              letterClass={letterClass}
              stringToAnimate={user.about}
              passedIndex={user.name.length}
            />
          </span>
        </h1>
        {helper()}
        <div className="image-container"></div>
      </div>
    </div>
  )
}
// TODO: Insert image of person
export default Home
