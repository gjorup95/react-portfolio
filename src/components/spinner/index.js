import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faJava,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
const Spinner = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faJava} color="#5382a1" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faNode} color="#EFD81D" />
        </div>
      </div>
    </div>
  )
}
export default Spinner
