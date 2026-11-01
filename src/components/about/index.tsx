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
            I’m a Senior Architect, primarily developing and maintaining Danish public-sector systems. Since 2023 I have designed and delivered solutions across .NET, Java and Angular for national systems such as MitDK, Elektronisk Tinglysning and Producentansvarsregisteret.

          </p>
          <p>
            I specialise in turning complex and changing legal requirements into maintainable, secure architectures. I work hands-on with modular monoliths, microservices, identity and access management (Keycloak, NemLog-in, MitID, OIDC/SAML) and integrations with national and EU services. I work directly with customers, from requirements workshops to architecture proposals and demos, and I own the architecture documentation and the technical decisions behind it.
          </p>
          <p>
            I thrive in teams built on collaboration and professional sparring, where knowledge flows both ways. I enjoy raising the technical level of the people around me while continuously developing my own.
          </p>
        </div>
      </div>
      <Spinner />
    </div>
  )
}

export default About
