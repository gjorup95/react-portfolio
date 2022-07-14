import './index.scss'
import { useState } from 'react'
import CustomLoader from './index'
import { motion, AnimatePresence } from 'framer-motion'
export const IsLoadingHOC = (
  WrappedComponentPage,
  WrappedComponentLoader,
  loadingMessage
) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true)
    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading)
    }

    return (
      <>
        <AnimatePresence>
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
