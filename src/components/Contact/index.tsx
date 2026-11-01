import './index.scss'
import AnimateLetters from '../AnimateLetters'
import { useState, useRef, type SubmitEvent } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import emailjs from '@emailjs/browser'
import Alerts, { type FormStatus } from '../alerts'

delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
})

// Public by design: EmailJS keys are meant to ship in browser code. Abuse is
// limited by the domain allowlist and rate limit in the EmailJS dashboard.
const EMAILJS_SERVICE_ID = 'service_cgyic9n'
const EMAILJS_TEMPLATE_ID = 'template_1iziy8v'
const EMAILJS_PUBLIC_KEY = '6IgMgQazJPFAvg2zj'

const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('')
  const form = useRef<HTMLFormElement>(null)
  const sendEmail = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('pending')
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.currentTarget, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => setFormStatus('done'),
        () => setFormStatus('error')
      )
  }

  return (
    <>
      <div className="container split-page contact-page">
        <div className="text-zone split-page__main">
          <h1>
            <AnimateLetters text="Kontakt" />
          </h1>

          <p className="paragraph-contact">
            Har du spørgsmål eller henvendelser er du meget velkommen til at
            kontakte mig via mailformularen herunder, så vil jeg vende tilbage til dig hurtigst muligt.
          </p>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              className="input-item name"
              placeholder="Navn"
              aria-label="Navn"
              type="text"
              name="name"
              maxLength={100}
              required
            />

            <input
              className="input-item email"
              placeholder="Email"
              aria-label="Email"
              type="email"
              name="email"
              maxLength={254}
              required
            />

            <input
              className="input-item topic"
              placeholder="Emne"
              aria-label="Emne"
              type="text"
              name="subject"
              maxLength={150}
              required
            />

            <textarea
              className="input-item"
              placeholder="Besked"
              aria-label="Besked"
              name="message"
              maxLength={5000}
              required
            ></textarea>
            <button
              type="submit"
              className="button button--primary"
              disabled={formStatus === 'pending'}
            >
              Send besked
            </button>
          </form>

          <div className="map-wrap">
            <MapContainer
              center={[56.17547802941453, 10.204873863180014]}
              zoom={13}
              dragging={false}
              doubleClickZoom={false}
              scrollWheelZoom={false}
              zoomControl={true}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <Marker position={[56.17547802941453, 10.204873863180014]}></Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Alerts formStatus={formStatus} formRef={form} />
    </>
  )
}

export default Contact
