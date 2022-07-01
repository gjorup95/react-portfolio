import './index.scss'
import { useState } from 'react'
import CustomLoader from './index'
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
    if (isLoading) {
      return (
        <>
          <CustomLoader message={loadingMessage} setLoading={setLoadingState} />
        </>
      )
    } else if (isLoading === false) {
      return (
        <>
          <WrappedComponentPage {...props} />
        </>
      )
    }
  }
  return HOC
}
export default IsLoadingHOC
