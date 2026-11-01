import './index.scss'
import { Link } from 'react-router-dom'
import AnimateLetters from '../AnimateLetters'

const user = {
  name: 'Troels Gjørup',
  about: 'Fullstack Developer.',
  abilities: [
    'Frontend & Backend',
    'Java & Spring',
    'C# & .NET',
    'Angular & ReactJS',
  ],
}

const Home = () => {
  return (
    <div className="container split-page home-page">
      <div className="text-zone split-page__main">
        <h1 className="name-header">
          <span className="name-line">
            <AnimateLetters text={user.name} />
          </span>
          <span className="position-header">
            <AnimateLetters text={user.about} startIndex={user.name.length} />
          </span>
        </h1>
        <ul className="abilities">
          {user.abilities.map((ability) => (
            <li key={ability}>{ability}</li>
          ))}
        </ul>
        <div className="button-container">
          <Link to="/react-portfolio/contact" className="button button--primary">
            Kontakt mig
          </Link>
          <a
            href="https://drive.google.com/file/d/1-CQXSsjW_gzq6b3GGp0xWTYKImB9YWHX/view?usp=sharing"
            download
            target="_blank"
            rel="noreferrer"
            className="button button--secondary"
          >
            Hent CV
          </a>
        </div>
      </div>
    </div>
  )
}
export default Home
