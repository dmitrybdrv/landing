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
                   <p>Связь с нами:</p>
                    <span>@gilletteopt.ru</span>
                    <span>8 495 000 12 12</span>
                </div>

            </div>

            <div className={style.footerInfo}>
                <span><img src={telega} alt="telega"/><a href="https://web.telegram.org/k/" target={'_blank'}>Telegram</a></span>
                <span><img src={twitter} alt="twitter"/><a href="https://en.wikipedia.org/wiki/Twitter" target={'_blank'}>Twitter</a></span>
                <span><img src={email} alt="email"/><a href="https://www.whatsapp.com/" target={'_blank'}>WhatsApp</a></span>
            </div>
        </footer>
    )
}