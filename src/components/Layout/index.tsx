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
import Header from '../Header'
import TopProgress from '../TopProgress'
import { pageKey } from '../../utils/pageKey'

// Same curve as --ease-out in App.scss, so CSS and JS motion feel identical.
const EASE_OUT = [0.22, 1, 0.36, 1] as const

// Without freezing, the exiting page would render the incoming route during its fade-out.
const FrozenOutlet = () => {
  const outlet = useOutlet()
  const [frozen] = useState(outlet)
  return frozen
}

// Inside the Suspense boundary, so its effect runs only once the lazy page has mounted.
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
  const page = pageKey(location.pathname)
  const pageRef = useRef<HTMLElement>(null)
  const [readyPath, setReadyPath] = useState<string | null>(null)
  const loading = readyPath !== page

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <TopProgress active={loading} />
        <div className="App">
          <Header />
          <main className="page" ref={pageRef}>
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => pageRef.current?.scrollTo(0, 0)}
            >
              <m.div
                key={page}
                className="page-transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.25, ease: EASE_OUT } }}
                exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
              >
                <Suspense fallback={null}>
                  <FrozenOutlet />
                  <PageReady path={page} onReady={setReadyPath} />
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
