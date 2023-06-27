import {useAppSelector} from "./useAppSelector.ts";
import {toast} from "react-toastify";
import {errorMessageSelector, messageSelector} from "../../app/app.selectors.ts";

/**
 * useToasts - функция обработки всплывающих уведомлений
 */
export const useToasts = () => {
    const message = useAppSelector(messageSelector)
    const error = useAppSelector(errorMessageSelector)

    if (message) {
        toast.success(message)
    } else
    if(error) {
        toast.error(error)
    }
}