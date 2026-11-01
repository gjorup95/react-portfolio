import { useState, useEffect, useRef } from 'react'

import './index.scss'
import ProgressBar from './ProgressBar'

const normalize = (value, min, max) => (value - min) / (max - min)

const easeInCirc = (x) => {
  x = normalize(x, 0, 100)
  return 1 - Math.sqrt(1 - Math.pow(x, 2))
}

const NewCustomLoader = ({ message = 'Loading...', setLoading }) => {
  const [loader, setLoader] = useState(0)
  const setLoadingRef = useRef(setLoading)

  useEffect(() => {
    let loadNum = 0
    let intervalId = null

    const doneTimeout = setTimeout(() => {
      setLoadingRef.current(false)
    }, 1200)
    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        if (loadNum < 100) {
          loadNum += 1
          setLoader(easeInCirc(loadNum) * 100)
        } else {
          clearInterval(intervalId)
        }
      }, 8)
    }, 200)

    return () => {
      clearTimeout(doneTimeout)
      clearTimeout(startTimeout)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="box">
      <div className="spinner">
        <ProgressBar key="pBar" completed={loader} message={message} />
      </div>
    </div>
  )
}
export default NewCustomLoader
