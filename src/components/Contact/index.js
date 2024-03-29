import './index.scss'
import AnimateLetters from '../AnimateLetters'
import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import Alerts from '../alerts'
import IsLoadingHOC from '../customLoader/IsLoadingHOC'
import { motion } from 'framer-motion'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [formStatus, setFormStatus] = useState('')
  const form = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2200)
  }, [])

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
  const sendEmail = (e) => {
    e.preventDefault()
    //do something else
    setFormStatus('pending')
    emailjs
      .sendForm(
        'service_cgyic9n',
        'template_1iziy8v',
        form.current,
        '6IgMgQazJPFAvg2zj'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
          setFormStatus('error')
        }
      )
      .finally(() => {
        setFormStatus('done')
      })
  }

  return (
    <motion.div
      layout
      className="motion"
      initial="enter"
      animate="animate"
      exit="exit"
      variants={transition}
    >
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              stringToAnimate={'Kontakt'}
              passedIndex={15}
            />
          </h1>

          <p className="paragraph-contact">
            Jeg er interesseret i jobmuligheder der byder på nye udfordringer
            over hele software-stacken. Hvor jeg kan bidrage til udviklingen af
            projekter og opnå nye erfaringer i et team. <br />
            Har du spørgsmål eller henvendelser er du meget velkommen til at
            kontakte mig.
          </p>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              className="input-item name"
              placeholder="Navn"
              type="text"
              name="name"
              required
            />

            <input
              className="input-item email"
              placeholder="Email"
              type="email"
              name="email"
              required
            />

            <input
              className="input-item topic"
              placeholder="Emne"
              type="text"
              name="subject"
              required
            />

            <textarea
              className="input-item"
              placeholder="Besked..."
              name="message"
              required
            ></textarea>
            <input type="submit" className="flat-button" value="SEND" />
          </form>
        </div>

        <div className="map-wrap">
          <MapContainer
            center={[56.17547802941453, 10.204873863180014]}
            zoom={13}
            dragging={false}
            doubleClickZoom={false}
            scrollWheelZoom={false}
            attributionControl={false}
            zoomControl={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[56.17547802941453, 10.204873863180014]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Alerts formStatus={formStatus} formRef={form} />
    </motion.div>
  )
}

export default IsLoadingHOC(Contact, 'Loading...')
