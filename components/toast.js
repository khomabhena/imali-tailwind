// import { toast } from 'react-hot-toast'

import { toast } from "react-hot-toast"

export const toastNormal = (message) => {
    return toast(message, {
        duration: 4000,
        position: 'bottom-center',
    })
}

export const toastSuccess = (message) => {
    return toast.success(message, {
        duration: 5000,
        position: 'bottom-center'
    })
}

export const toastError = (message) => {
    return toast.error(message, {
        duration: 5000,
        position: 'bottom-center'
    })
}