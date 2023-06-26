import {useToasts} from "../../utils/hooks/useToasts.ts";
import {Toast} from "../../components/toast/Toast.tsx";
import {Footer} from "../../components/footer/Footer.tsx";
import {BlackListPage} from "../../components/black-list-page/BlackList.tsx";

export const Unsubscribe = () => {
    useToasts()
    return (
        <>
            <BlackListPage/>
            <Toast/>
            <Footer/>
        </>
    );
};