import './index.scss'

const ScrollAnimation = () => {
  return (
    <div className="scroll-hint" aria-hidden="true">
      <p className="scroll-text">Scroll</p>
      <div className="mouse" />
    </div>
  )
}
export default ScrollAnimation
