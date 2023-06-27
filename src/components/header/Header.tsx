import {NavBar} from "./navbar/NavBar.tsx";
import style from './Header.module.scss'

export const Header = () => {
    return (
        <header className={style.headerContainer}>
            <h1>GilletteOpt.ru</h1>
            <NavBar/>
        </header>
    )
}