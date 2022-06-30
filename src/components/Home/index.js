import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimateLetters from '../AnimateLetters'
import React, { useEffect, useState } from 'react'
import CustomLoader from '../customLoader/index'


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
        <React.Fragment>
          <h2>{user.abilities}</h2>
          <Link to="/contact" className="flat-button">
            KONTAKT MIG
          </Link>
        </React.Fragment>
      )
    }
  }

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimateLetters
            letterClass={letterClass}
            stringToAnimate={user.name}
            passedIndex={0}
          />
          <br />
          <AnimateLetters
            letterClass={letterClass}
            stringToAnimate={user.about}
            passedIndex={user.name.length}
          />
        </h1>
        {helper()}
      </div>
    </div>
  )
}

export default Home
