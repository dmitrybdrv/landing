import style from './Footer.module.scss'
import twitter from '../../assets/img/twitter.png'
import email from '../../assets/img/email.png'
import telega from '../../assets/img/telega.png'

export const Footer = () => {
    return (
        <footer className={style.footerContainer}>

            <div className={style.footerText}>

                <div className={style.footerBlock1}>
                    <h3>Информация</h3>
                    <a href={'zzz'}>Политика конфиденциальности персональных данных</a>
                </div>

                <div className={style.footerBlock2}>
                   <p>Связаться с нами можно по:</p>
                    <span>@gilletteopt.ru</span>
                    <span>8 495 000 12 12</span>
                </div>

            </div>

            <div className={style.footerInfo}>
                <span><img src={telega} alt="telega"/><a href="">Telegram</a></span>
                <span><img src={twitter} alt="twitter"/><a href="">Twitter</a></span>
                <span><img src={email} alt="email"/><a href="">Email</a></span>
            </div>
        </footer>
    )
}