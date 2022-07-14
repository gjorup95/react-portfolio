import React from 'react'

const ProgressBar = (props) => {
  const { completed, message } = props

  const fillerStyles = {
    width: `${completed}%`,
    textAlign: 'center',
  }

  return (
    <>
      <h3 className="progressBar-text">{message}</h3>
      <div className="progressBar" style={fillerStyles}></div>
    </>
  )
}

export default ProgressBar
