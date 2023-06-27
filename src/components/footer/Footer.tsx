import style from './Footer.module.scss'
import whatsapp from '../../assets/img/whatsapp.png'
import telegram from '../../assets/img/telega.png'
import wechat from '../../assets/img/wechat.png'


export const Footer = () => {
    return (
        <footer className={style.footerContainer}>

            <div className={style.footerText}>

                <div className={style.footerBlock1}>
                    <h3>Информация</h3>
                    <a href={'/landing/src/common/security_policy.docx'} target={'_blank'}>Политика конфиденциальности персональных данных</a>
                </div>

                <div className={style.footerBlock2}>
                    <h3>Контакты:</h3>
                    <span>{import.meta.env.VITE_APP_EMAIL}</span>
                    <span>{import.meta.env.VITE_APP_PHONE_NUM}</span>
                </div>

            </div>

            <div className={style.footerInfo}>
                <span><img src={whatsapp} alt="whatsapp"/><a  href="https://api.whatsapp.com/send/?phone=79145534348" target={'_blank'}>WhatsApp</a></span>
                <span><img src={telegram} alt="telega"/><a href="https://t.me/vimpel_rus" target={'_blank'}>Telegram</a></span>
                <span><img src={wechat} alt="wechat"/><a href="https://u.wechat.com/MJVXW4LpOJ6a4CRJ0ny32Pw" target={'_blank'}>Wechat</a></span>
            </div>
        </footer>
    )
}