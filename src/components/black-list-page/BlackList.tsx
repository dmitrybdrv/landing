import styles from './BlackListPage.module.scss'
import {useAppDispatch} from "../../utils/hooks/useAppDispatch.ts";
import {appThunk} from "../../app/app.slice.ts";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {UnsubscribeDataType} from "../../api/mainApi.ts";

export const BlackListPage = () => {
    const dispatch = useAppDispatch()
    const [btn, setBtn] = useState(false)
    const { id } = useParams<UnsubscribeDataType>()


    const unsubscribeHandler = () => {
        if (id)
        dispatch(appThunk.unsubscribe({id}))
            .unwrap()
            .then(() => {
                setBtn(true)
            })
    }

    return (
        <div className={styles.blackListContainer}>
            <header><h1>Gilletteopt.ru</h1></header>
            <div className={styles.blackListMain}>
                <p>
                    Эта страница отписки предназначена для тех пользователей, которые больше не хотят получать
                    дальнейшие
                    письма от сайта gilletteopt.ru. Если вы хотите прекратить получение рассылок от нашего сайта, вы
                    можете
                    нажать на кнопку "Не получать больше писем!" на этой странице. После этого мы больше не будем
                    отправлять
                    вам письма с нашего сайта. Если вы ошибочно попали на эту страницу и не хотите отписываться от
                    рассылок,
                    вы можете просто закрыть эту страницу или вернуться на сайт gilletteopt.ru.
                </p>
                <button onClick={unsubscribeHandler} disabled={btn}>Не получать больше писем!</button>
            </div>
        </div>
    );
};