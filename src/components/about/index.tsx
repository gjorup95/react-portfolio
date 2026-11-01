import AnimateLetters from '../AnimateLetters'
import Spinner from '../spinner'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimateLetters text="Om mig" />
        </h1>

        <div className="text-block">
          <p>
            Jeg er en ambitiøs fullstack udvikler med en øget interesse for
            webudvikling og har min baggrund fra Aarhus Universitet, hvor jeg er
            kandidat i IT-Produktudvikling.
          </p>
          <p>
            Jeg har en stor interesse for min egen udvikling, og interesserer mig
            naturligt for at lære nye teknologier. Hvor jeg pt. er ved at udvikle mine kompetencer indenfor
            ASP.NET Core samt Angular for at styrke min værktøjskasse indenfor webudvikling.
          </p>
          <p>
            På det personlige plan er jeg en udadvendt med en stor interesse for engagementet med
            end-users og jeg trives bedst i fællesskaber med muligheder for
            samarbejde, løsningsparathed og sparring. I min fritid nyder jeg at holde mig fysisk
            aktiv ved at dyrke diverse sportsgrene og pleje mit konkurrencegen.
          </p>
        </div>
      </div>
      <Spinner />
    </div>
  )
}

export default About
