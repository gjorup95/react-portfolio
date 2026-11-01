import './index.scss'
import { useEffect, useState } from 'react'

// Seconds.
const START = 0.05
const STAGGER = 0.03
const DURATION = 0.5

type AnimateLettersProps = {
  text: string
  /** Offset into a longer sequence, so several lines animate as one. */
  startIndex?: number
}

const AnimateLetters = ({ text, startIndex = 0 }: AnimateLettersProps) => {
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    const total = START + (startIndex + text.length) * STAGGER + DURATION
    const timeout = setTimeout(() => setSettled(true), total * 1000)
    return () => clearTimeout(timeout)
  }, [startIndex, text.length])

  return (
    <span>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split('').map((char, i) => (
          <span
            key={char + i}
            className={settled ? 'letter letter--settled' : 'letter'}
            style={
              settled
                ? undefined
                : { animationDelay: `${START + (startIndex + i) * STAGGER}s` }
            }
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  )
}
export default AnimateLetters
