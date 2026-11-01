import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

import './index.scss'
import { useEffect, useRef, type RefObject } from 'react'
import type { Id } from 'react-toastify'

export type FormStatus = '' | 'pending' | 'error' | 'done'

type AlertsProps = {
  formStatus: FormStatus
  formRef: RefObject<HTMLFormElement | null>
}

const Alerts = ({ formStatus, formRef }: AlertsProps) => {
  const toastId = useRef<Id | null>(null)

  useEffect(() => {
    if (formStatus === 'pending') {
      toastId.current = toast.loading('Sender...')
      console.log('pending')
    } else if (formStatus === 'done') {
      console.log('done')
      formRef.current?.reset()
      if (toastId.current === null) return
      toast.update(toastId.current, {
        render: 'Gennemført',
        type: 'success',
        isLoading: false,
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
      })
    }
  }, [formStatus, formRef])

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
