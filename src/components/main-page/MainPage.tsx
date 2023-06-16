import style from './MainPage.module.scss'
import razor from '../../assets/img/mainRazor.gif'
import {DataRequest} from "../../features/dataRequest/DataRequest.tsx";

export const MainPage = () => {
    return (
        <div className={style.mainPageContainer} id={'main'}>
            <div className={style.mainPageImage}>
                <img src={razor} alt="razor"/>
            </div>
            <div className={style.mainPageText}>
                <h1>Оригинальные сменные картриджи оптом на gilletteopt.ru</h1>
                <h2>Быстрая доставка, надежное партнерство, уверенность в качестве - мы создаем новый уровень оптовых
                    продаж картриджей Gillette!</h2>
                <DataRequest/>
            </div>
        </div>
    )
}