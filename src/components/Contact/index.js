import './index.scss'
import AnimateLetters from '../AnimateLetters'
import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import Alerts from '../alerts'
import IsLoadingHOC from '../customLoader/IsLoadingHOC'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [formStatus, setFormStatus] = useState('')
  const form = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

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
    <>
      <div className="container contact-page">
        <Alerts formStatus={formStatus} formRef={form}></Alerts>
        <div className="text-zone">
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              stringToAnimate={'Kontakt Mig'}
              passedIndex={15}
            ></AnimateLetters>
          </h1>

          <p>
            Jeg er interesseret i jobmuligheder der byder på nye udfordringer
            over hele software-stacken. Hvor jeg kan bidrage til udviklingen af
            projekter og opnå nye erfaringer i et team. <br />
            Har du spørgsmål eller henvendelser er du meget velkommen til at
            kontakte mig.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Navn" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Emne"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Besked..."
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
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
    </>
  )
}

export default IsLoadingHOC(Contact, 'Loading...')
