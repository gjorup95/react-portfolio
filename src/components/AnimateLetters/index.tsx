import './index.scss'
type AnimateLettersProps = {
  letterClass: string
  stringToAnimate: string
  passedIndex: number
}

const AnimateLetters = ({
  letterClass,
  stringToAnimate,
  passedIndex,
}: AnimateLettersProps) => {
  const stripStringHelper = (string: string) => {
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
