import {toast} from 'react-toastify';

export const heandleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const heandleError = (msg) => {
    toast.error(msg, {

    })
}