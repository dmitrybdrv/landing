import {ToastContainer} from "react-toastify";

/**
 *  Toast - всплывающий "тост" при получени уведомлений/сообщений
 */
export const Toast = () => {
    return <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{width: "fit-content"}}
    />
};