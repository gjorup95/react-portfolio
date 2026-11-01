import './index.scss'
const AnimateLetters = ({ letterClass, stringToAnimate, passedIndex }) => {
  const stripStringHelper = (string) => {
    return string.split('')
  }
  return (
    <span>
      {stripStringHelper(stringToAnimate).map((char, i) => (
        //
        <span key={char + i} className={`${letterClass} _${i + passedIndex}`}>
          {char}
        </span>
      ))}
    </span>
  )
}
export default AnimateLetters
