import './index.scss'
import { useEffect, useRef } from 'react'

type TopProgressProps = {
  active: boolean
}

// Pages don't report real progress: ease toward this while waiting, finish when ready.
const WAIT_AT = 0.9

const TopProgress = ({ active }: TopProgressProps) => {
  const barRef = useRef<HTMLDivElement>(null)
  // Starts part-way to continue the index.html bar shown during the initial load.
  const progress = useRef(active ? 0.5 : 0)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const render = (value: number, opacity: number) => {
      progress.current = value
      bar.style.transform = `scaleX(${value})`
      bar.style.opacity = String(opacity)
    }
    const jump = (value: number, opacity: number) => {
      bar.style.transition = 'none'
      render(value, opacity)
      void bar.offsetWidth // flush styles so the next change animates again
      bar.style.transition = ''
    }

    if (active) {
      if (progress.current === 0 || progress.current >= 1) jump(0.1, 1)
      else render(progress.current, 1)
      const trickle = setInterval(() => {
        render(progress.current + (WAIT_AT - progress.current) * 0.15, 1)
      }, 100)
      return () => clearInterval(trickle)
    }

    if (progress.current === 0) return
    // Hold at 100% briefly, otherwise the fade starts before completion is visible.
    render(1, 1)
    const fade = setTimeout(() => render(1, 0), 350)
    const reset = setTimeout(() => jump(0, 0), 750)
    return () => {
      clearTimeout(fade)
      clearTimeout(reset)
    }
  }, [active])

  return (
    <div
      className="top-progress"
      role="progressbar"
      aria-label="Loading page"
      aria-hidden={!active}
    >
      <div className="top-progress__bar" ref={barRef} />
    </div>
  )
}

export default TopProgress
