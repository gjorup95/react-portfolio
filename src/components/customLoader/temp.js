import React, { useRef } from 'react'
import { Progress } from 'semantic-ui-react'
import './index.scss'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const CustomLoader = (props) => {
  const [loader, setLoader] = useState(0)
  const [loadScreenStatus, setLoadScreenStatus] = useState(true)
  const timerRef = useRef(null)
  let loadNum = 0
  const animate = () => {
    loadNum += 1
    if (loadNum <= 100) {
      setLoader((loader) => loadNum)
    } else {
      clearInterval(timerRef.current)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadScreenStatus(false)
    }, 2000)
    setTimeout(() => {
      timerRef.current = setInterval(() => {
        animate()
      }, 10)
    }, 400)

    // eslint-disable-next-line
  }, [])
 

  const sendDataToParent = () => {
    props.passData(loadScreenStatus)
  }

  useEffect(() => {
    sendDataToParent()
    // eslint-disable-next-line
  }, [loadScreenStatus])

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          height: '90%',
          width: 0,
        }}
        animate={{ width: '100%', transitionDuration: '0.05s' }}
        exit={{ x: window.innerWidth, transitionDuration: '0.1s' }}
      >
        <div className="spinner">
          <h3 className="spinner-text">Loading...</h3>
          <Progress percent={loader} size="tiny" />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CustomLoader
