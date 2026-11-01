import './index.scss'
import AnimateLetters from '../AnimateLetters'
import { useState, useEffect, useRef, type FormEvent } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import emailjs from '@emailjs/browser'
import Alerts, { type FormStatus } from '../alerts'
import IsLoadingHOC from '../customLoader/IsLoadingHOC'
import { motion, type Variants } from 'framer-motion'

// Bundlers rename/inline Leaflet's default marker images, which breaks its
// automatic icon-path detection, so point it at the imported assets.
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
})

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [formStatus, setFormStatus] = useState<FormStatus>('')
  const form = useRef<HTMLFormElement>(null)
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2200)
  }, [])

  const transition: Variants = {
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
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //do something else
    setFormStatus('pending')
    emailjs
      .sendForm(
        'service_cgyic9n',
        'template_1iziy8v',
        e.currentTarget,
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
            Har du spørgsmål eller henvendelser er du meget velkommen til at
            kontakte mig via mailformularen herunder, så vil jeg vende tilbage til dig hurtigst muligt.
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
