import AnimateLetters from '../AnimateLetters'
import Spinner from '../spinner'
import './index.scss'

const About = () => {
  return (
    <div className="page-column about-page">
      <div className="text-zone">
        <h1>
          <AnimateLetters text="About me" />
        </h1>

        <div className="text-block">
          <p>
            I'm an ambitious full-stack developer with a strong interest in web
            development, and I hold a master's degree in IT Product Development
            from Aarhus University.
          </p>
          <p>
            I care a lot about my own development and naturally enjoy learning new
            technologies. Right now I'm building my skills in ASP.NET Core and
            Angular to strengthen my web development toolbox.
          </p>
          <p>
            On a personal level, I'm outgoing with a strong interest in engaging
            with end users, and I thrive in teams with room for collaboration,
            solution-oriented thinking and sparring. In my free time I enjoy
            staying physically active through a variety of sports and feeding my
            competitive streak.
          </p>
        </div>
      </div>
      <Spinner />
    </div>
  )
}

export default About
