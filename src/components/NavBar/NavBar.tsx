import React from "react";
import styles from './navBar.module.css'

export const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <ul>
                <li>
                    <a>Профиль</a>
                </li>
                <li>
                    <a>Сообщения</a>
                </li>
                <li>
                    <a>Новости</a>
                </li>
                <li>
                    <a>Музыка</a>
                </li>
                <li>
                    <a>Настройки</a>
                </li>
            </ul>
        </div>
    )
}