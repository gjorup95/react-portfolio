import './index.scss'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
} from 'framer-motion'
import Sidebar from '../Sidebar'
import TopProgress from '../TopProgress'

// Same curve as --ease-out in App.scss, so CSS and JS motion feel identical.
const EASE_OUT = [0.22, 1, 0.36, 1] as const

/**
 * Keeps rendering the outlet it was mounted with, so a page that is fading out
 * keeps showing its own content instead of switching to the incoming page.
 */
const FrozenOutlet = () => {
  const outlet = useOutlet()
  const [frozen] = useState(outlet)
  return frozen
}

/**
 * Rendered next to the page inside the Suspense boundary, so its effect only
 * runs once the page's code has loaded and the page has actually mounted.
 */
const PageReady = ({
  path,
  onReady,
}: {
  path: string
  onReady: (path: string) => void
}) => {
  useEffect(() => onReady(path), [path, onReady])
  return null
}

const Layout = () => {
  const location = useLocation()
  const pageRef = useRef<HTMLElement>(null)
  // The path whose page is mounted and ready; anything else means "loading".
  const [readyPath, setReadyPath] = useState<string | null>(null)
  const loading = readyPath !== location.pathname

  return (
    // LazyMotion + `m` ships only the animation features this fade needs.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <TopProgress active={loading} />
        <div className="App">
          <Sidebar />
          <main className="page" ref={pageRef}>
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => pageRef.current?.scrollTo(0, 0)}
            >
              <m.div
                key={location.pathname}
                className="page-transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.25, ease: EASE_OUT } }}
                exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
              >
                {/* No fallback content: the top progress bar shows the wait. */}
                <Suspense fallback={null}>
                  <FrozenOutlet />
                  <PageReady path={location.pathname} onReady={setReadyPath} />
                </Suspense>
              </m.div>
            </AnimatePresence>
          </main>
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}

export default Layout
