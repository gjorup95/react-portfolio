import type { CSSProperties } from 'react'

type ProgressBarProps = {
  completed: number
  message: string
}

const ProgressBar = ({ completed, message }: ProgressBarProps) => {
  const fillerStyles: CSSProperties = {
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
