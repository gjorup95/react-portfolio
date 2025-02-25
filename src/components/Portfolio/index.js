import './index.scss'
const Portfolio = ({ imageSrc, contributions }) => {
  return (
    <div className="grid-container-portfolio">
      <h1 className="title-unique">Producentansvarsregisteret</h1>

      <div className="image-container">
        <img src={imageSrc} alt="Project" />
      </div>

      <div className="text-container">
        <h2 className="override-h2">Key Contributions</h2>
        <ul className="override-ul">
          {contributions.map((item, index) => (
            <li className="override-li" key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="text-container">
        <h2 className="override-h2">Technologies</h2>
      </div>
    </div>
  );
};
export default Portfolio
