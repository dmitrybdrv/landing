import cass1 from "../../../assets/img/cass1.gif";
import cass2 from "../../../assets/img/cass2.gif";
import cass3 from "../../../assets/img/cass3.jpeg";
import cass4 from "../../../assets/img/cass4.gif";
import style from './Carousel.module.scss'
import Carousel from "nuka-carousel"

/**
 *  CarouselComponent - карусель с автопрокруткой изоражений товара
 */
export const CarouselComponent = () => {

    const renderBottomCenterControls = () => {
        return null;
    }

    return (
        <div className={style.carouselContainer}>
            <Carousel wrapAround autoplay cellAlign="left"
                      renderBottomCenterControls={renderBottomCenterControls}>
                <img src={cass1} alt={'cass1'}/>
                <img src={cass2} alt={'cass2'}/>
                <img src={cass3} alt={'cass3'}/>
                <img src={cass4} alt={'cass4'}/>
            </Carousel>
        </div>
    )
}