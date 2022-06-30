import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

import './index.scss'
import { useEffect, useRef } from 'react'
const Alerts = (props) => {
  const toastId = useRef(null)
  useEffect(() => {
    validateToast()
    // eslint-disable-next-line
  }, [props.formStatus])

  const validateToast = () => {
    if (props.formStatus === '') return
    else if (props.formStatus === 'pending') {
      toastId.current = toast.loading('Sender...')
      console.log('pending')
      return
    } else if (props.formStatus === 'done') {
      console.log('done')
      props.formRef.current.reset()
      toast.update(toastId.current, {
        render: 'Gennemført',
        type: 'success',
        isLoading: false,
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
      })
      return
    }
  }
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      ></ToastContainer>
    </div>
  )
}

export default Alerts
