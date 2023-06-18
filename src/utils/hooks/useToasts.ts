import {useAppSelector} from "./useAppSelector.ts";
import {toast} from "react-toastify";
import {errorSelector, messageSelector} from "../../app/app.selectors.ts";


export const useToasts = () => {
    const message = useAppSelector(messageSelector)
    const error = useAppSelector(errorSelector)

    if (message) {
        toast.info(message)
    } else
    if(error) {
        toast.error(error)
    }
}