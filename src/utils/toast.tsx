import { Bounce, toast } from 'react-toastify';

const ShowErrorMessage = (message : string = '',delay : number = 3000,) => {
    toast.error(message, {
        position: "top-right",
        autoClose: delay,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

const ShowSuccessMessage = (message : string = '',delay : number = 3000,) => {
    toast.success(message, {
        position: "top-right",
        autoClose: delay,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

const ShowWarningMessage = (message : string = '',delay : number = 3000,) => {
    toast.warn(message, {
        position: "top-right",
        autoClose: delay,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

const ShowInfoMessage = (message : string = '',delay : number = 3000,) => {
    toast.info(message, {
        position: "top-right",
        autoClose: delay,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

export { ShowErrorMessage, ShowSuccessMessage, ShowWarningMessage, ShowInfoMessage }