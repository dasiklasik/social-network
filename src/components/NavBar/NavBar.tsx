import React from "react";
import { NavLink } from "react-router-dom";
import styles from './navBar.module.css'

export const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? styles.active: ''} to={'/profile'}>Профиль</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? styles.active: ''} to={'/dialogs'}>Сообщения</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? styles.active: ''} to={'/feed'}>Новости</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? styles.active: ''} to={'music'}>Музыка</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? styles.active: ''} to={'settings'}>Настройки</NavLink>
                </li>
            </ul>
        </div>
    )
}