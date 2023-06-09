import style from "./About.module.scss";

export const About = () => {
    return (
        <div className={style.aboutPageContainer} id={'about'}>
            <div className={style.aboutPageLeft}>
                <h2>GilletteOPT.ru - надежный поставщик сменных кассет gillette.</h2>
                <p>
                    Мы понимаем, что для наших клиентов время - это деньги. Поэтому мы всегда стараемся выполнить заказы
                    максимально быстро и качественно. Оперативная обработка заказов и быстрая доставка -
                    это то, что делает нашу компанию надежным партнером.
                    Мы предлагаем оптимальные тарифы на доставку и гарантируем, что кассеты будут доставлены
                    вам в кратчайшие сроки.
                </p>
                <p>
                    Готовы поддержать ваш бизнес и предложить выгодные условия для сотрудничества! Гибкая система
                    скидок и индивидуальный подход к каждому клиенту позволяют нам предлагать оптимальное решение для
                    вашего бизнеса. Мы гарантируем, что сотрудничество с нами будет выгодным и приятным для вас.
                </p>
            </div>
            <div className={style.aboutPageRight}>
                <h2>Это итересно!</h2>
                <p>
                    Кассеты Gillette являются одним из самых популярных продуктов компании Gillette, которая была
                    основана в США в 1901 году. Вот несколько интересных фактов о том, как изобрели кассеты Gillette,
                    кто их производит и где:
                </p>
                <ul>
                    <li>
                        Кассеты Gillette были изобретены американским предпринимателем Кингом Кэмпом Гиллеттом в начале
                        20-го века. Гиллетт пришел на идею создать бритву с одноразовыми лезвиями, которые можно было бы
                        заменить, когда они тупые.
                    </li>
                    <li>
                        Первые кассеты Gillette были выпущены в 1971 году в США для бритвенной системы "Trac II". С тех
                        пор кассеты Gillette стали незаменимым элементом многих других бритвенных систем компании.
                    </li>
                    <li>
                        Сегодня кассеты Gillette производятся в различных странах, включая США, Великобританию,
                        Германию, Китай, Францию, Ирландию, Бразилию и другие. Кассеты, произведенные в разных странах, могут
                        немного отличаться по дизайну и качеству.
                    </li>
                    <li>
                        Китай является одним из крупнейших производителей кассет Gillette. Заводы компании Gillette в
                        Китае расположены в городах Шанхай, Шэньчжэнь и Юнчэн.
                    </li>
                </ul>
            </div>
        </div>
    );
};