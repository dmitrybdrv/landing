import style from './Product.module.scss'
import {CarouselComponent} from "./carousel/CarouselComponent.tsx";

/**
 *  Product - блок с каруселью изображений. (Описание групп товаров)
 */
export const Product = () => {
    return (
        <div className={style.productContainer} id={'product'}>
            <div className={style.productText}>
                <h2>Широкий ассортимент сменных кассет Gillette для всех моделей бритвенных станков</h2>
                <p>На нашем сайте вы можете купить оптом Gillette сменные кассеты для самых популярных моделей
                    бритвенных станков, таких как Fusion, Mach3, Sensor и других. Мы предлагаем конкурентоспособные цены нашим
                    клиентам, а также быструю и надежную доставку по всему миру.</p>
                <p>GilletteOpt.ru: ваш надежный партнер для оптовой продажи бритвенных кассет.</p>
                <h3>Ознакомиться со всеми позициями вы можете запросив актуальный прайс.</h3>
            </div>
            <div className={style.productCarousel}>
                <CarouselComponent/>
            </div>
        </div>
    )
}