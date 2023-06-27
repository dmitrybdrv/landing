import {useToasts} from "../../utils/hooks/useToasts.ts";
import {Toast} from "../../components/toast/Toast.tsx";
import {Footer} from "../../components/footer/Footer.tsx";
import {UnsubscribePage} from "../../components/unsubscribe-page/UnsubscribePage.tsx";

/**
 *  Unsubscribe - страница отписки от получения письма
 */
export const Unsubscribe = () => {
    useToasts()
    return (
        <>
            <UnsubscribePage/>
            <Footer/>
            <Toast/>
        </>
    );
};