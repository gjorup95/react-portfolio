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
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faJava} />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faJsSquare} />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faGitAlt} />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faCss3} />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faNode} />
        </div>
      </div>
    </div>
  )
}
export default Spinner
