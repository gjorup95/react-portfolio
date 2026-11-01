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
      toastId.current = toast.loading('Sending…')
      return
    }
    if (toastId.current === null) return
    if (formStatus === 'done') {
      formRef.current?.reset()
      toast.update(toastId.current, {
        render: 'Message sent',
        type: 'success',
        isLoading: false,
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
      })
    } else if (formStatus === 'error') {
      // The form is not reset, so the visitor can retry without retyping.
      toast.update(toastId.current, {
        render: "Your message wasn't sent. Please try again, or reach me on LinkedIn.",
        type: 'error',
        isLoading: false,
        autoClose: 6000,
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
