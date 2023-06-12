import cass1 from "../../../assets/img/cass1.png";
import cass2 from "../../../assets/img/cass2.png";
import cass3 from "../../../assets/img/cass3.png";
import style from './Carousel.module.scss'
import Carousel from "nuka-carousel"


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
            </Carousel>
        </div>
    )
}