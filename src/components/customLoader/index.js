import React, { useRef } from 'react'

import './index.scss'
import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
const NewCustomLoader = (props) => {
  const [loader, setLoader] = useState(0)
  const timerRef = useRef(null)
  const { setLoading } = props
  let loadNum = 0
  let easeIn = 0
  const animate = () => {
    if (loadNum < 100) {
      loadNum += 1
      easeIn = easeInCirc(loadNum) * 100
      setLoader((loader) => easeIn)
    } else {
      clearInterval(timerRef.current)
    }
  }
  const easeInCirc = (x) => {
    x = normalize(x, 0, 100)
    return 1 - Math.sqrt(1 - Math.pow(x, 2))
  }

  const normalize = (value, min, max) => {
    return (value - min) / (max - min)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1200)
    setTimeout(() => {
      timerRef.current = setInterval(() => {
        animate()
      }, 8)
    }, 200)

    // eslint-disable-next-line
  }, [])

  return (
    <div className="box">
      <div className="spinner">
        <ProgressBar key="pBar" completed={loader} message={props.message} />
      </div>
    </div>
  )
}
NewCustomLoader.defaultProps = {
  message: 'Loading...',
}
export default NewCustomLoader
