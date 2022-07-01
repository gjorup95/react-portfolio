import React, { useRef } from 'react'
import { Progress } from 'semantic-ui-react'
import './index.scss'
import { useState, useEffect } from 'react'
const NewCustomLoader = (props) => {
  const [loader, setLoader] = useState(0)
  const timerRef = useRef(null)
  const { setLoading } = props
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
      setLoading(false)
    }, 2000)
    setTimeout(() => {
      timerRef.current = setInterval(() => {
        animate()
      }, 10)
    }, 400)

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="spinner">
        <h3 className="spinner-text">{props.message}</h3>
        <Progress percent={loader} size="tiny" />
      </div>
    </>
  )
}
NewCustomLoader.defaultProps = {
  message: 'Loading...',
}
export default NewCustomLoader
