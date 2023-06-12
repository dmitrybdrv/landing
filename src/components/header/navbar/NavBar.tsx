import {Link} from 'react-scroll'
import style from './NavBar.module.scss'

export const NavBar = () => {
    return (
        <nav className={style.navbarContainer}>

            <Link activeClass="active" to="main" spy={true} smooth={true} duration={500}>
                Главная
            </Link>

            <Link activeClass="active" to="product" spy={true} offset={-40} smooth={true} duration={500}>
                Продукция
            </Link>

            <Link activeClass="active" to="instruction" spy={true} smooth={true} duration={500}>
                Как заказать
            </Link>

        </nav>
    )
}
