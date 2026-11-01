import './index.scss'
import { useState, type ComponentType } from 'react'
import CustomLoader from './index'
import { motion, AnimatePresence } from 'framer-motion'
export const IsLoadingHOC = <P extends object>(
  WrappedComponentPage: ComponentType<P>,
  loadingMessage: string
) => {
  function HOC(props: P) {
    const [isLoading, setLoading] = useState(true)
    const setLoadingState = (isComponentLoading: boolean) => {
      setLoading(isComponentLoading)
    }

    return (
      <>
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              layout
              className="hello"
              key="boxit"
              initial={{
                x: '-25%',
                opacity: 0,
                transition: { duration: 0.2 },
              }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
              exit={{ x: '100%', transition: { duration: 0.3 }, opacity: 1 }}
            >
              <CustomLoader
                message={loadingMessage}
                setLoading={setLoadingState}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {isLoading === false && <WrappedComponentPage {...props} />}
      </>
    )
  }

  return HOC
}
export default IsLoadingHOC
