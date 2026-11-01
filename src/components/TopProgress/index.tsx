import './index.scss'
import { useEffect, useRef } from 'react'

type TopProgressProps = {
  /** True from the moment navigation starts until the new page is ready. */
  active: boolean
}

// Pages don't report real progress, so the bar eases toward this point while
// waiting and only completes once the page is actually ready.
const WAIT_AT = 0.9

/** Thin progress bar fixed to the top edge of the viewport. */
const TopProgress = ({ active }: TopProgressProps) => {
  const barRef = useRef<HTMLDivElement>(null)
  // Current fill (0-1). Starts part-way when mounted mid-load, picking up from
  // the bar in index.html that covers the initial JavaScript download.
  const progress = useRef(active ? 0.5 : 0)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const render = (value: number, opacity: number) => {
      progress.current = value
      bar.style.transform = `scaleX(${value})`
      bar.style.opacity = String(opacity)
    }
    // Jump without animating (used when starting over from empty).
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
    // Fill to 100% (0.2s), hold briefly so the completion is visible, then fade.
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
      aria-label="Indlæser side"
      aria-hidden={!active}
    >
      <div className="top-progress__bar" ref={barRef} />
    </div>
  )
}

export default TopProgress
