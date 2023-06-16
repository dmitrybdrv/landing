import {useAppSelector} from "./useAppSelector.ts";
import {toast} from "react-toastify";
import {messageSelector} from "../../app/app.selectors.ts";

export const useToasts = () => {
    const message = useAppSelector(messageSelector)

    if(message) {
        toast.info(message)
    }
}