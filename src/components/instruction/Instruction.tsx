import style from "./Instruction.module.scss";
import mack3 from "../../assets/img/mack3.gif";
import but from "../../assets/img/click.png";
import email from "../../assets/img/address.png";
import press from "../../assets/img/press-button.png";
import price from "../../assets/img/best-price.png";
import {PriceRequest} from "../../features/price-request/priceRequest.tsx";

export const Instruction = () => {
    return (
        <div className={style.instructionPageContainer} id={'instruction'}>
            <div className={style.instructionPageImage}>
                <img src={mack3} alt="instruction"/>
            </div>

            <div className={style.instructionPageText}>
                <h3>Сделать заказ очень просто!</h3>
                <ul>
                    <li><img src={but} alt="button"/> Кликните по кнопке "Запросить прайс"</li>
                    <li><img src={email} alt="email"/> В открывшемся окне введите свой адрес электронной почты в соответствующее поле.</li>
                    <li><img src={press} alt="press"/> Нажмите кнопку "Отправить"</li>
                    <li><img src={price} alt="button"/> После обработки запроса, на указанный адрес электронной почты придет актуальный прайс-лист с
                        ценами на товары, форма оплаты и сроки доставки. Также мы отправим всю необходимую информацию
                        для дальнейшего оформления заказа.
                    </li>
                </ul>
                <PriceRequest/>
            </div>
        </div>
    )
}