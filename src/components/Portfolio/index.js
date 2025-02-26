import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Portfolio = ({ imageSrc, contributions, projectTitle, year, technologies }) => {
  return (
    <div className="grid-container-portfolio">
      <div className="text-container">
        <div className="title-container">
          <h1 className="title-unique">{projectTitle}</h1>
          <h2 className="subtitle-year">{year}</h2>
        </div>
        <div className="image-container">
          <img src={imageSrc} alt="Project" />
        </div>


        <h2 className="override-h2">Key Contributions</h2>
        <ul className="override-ul">
          {contributions.map((item, index) => (
            <li className="override-li" key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="override-h2">Technologies</h2>
        <div className="technology-container">
          {technologies?.map((item, index) => (
            <FontAwesomeIcon icon={item} size={'8x'} style={{ gridColumn: `${(index % 3) + 1} / span 1` }}
                             color={'#ffd700'} alt={`technologies ${index}`} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio
