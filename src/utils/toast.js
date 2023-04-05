import { toast } from 'react-toastify';

export const renderToast = (message) => {
    toast(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    if (message === 'Email changed successfully, redirecting...') {
        return setTimeout(() => {
            window.location.href = '/auth/login'
            handleLogout()
        }, 3000)
    }
}    
