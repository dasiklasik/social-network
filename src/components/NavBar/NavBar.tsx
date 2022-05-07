import React from "react";
import { NavLink } from "react-router-dom";
import styles from './navBar.module.css'
import {navbarType} from "../../redux/state";
import {FriendItem} from "./FriendItem/FriendItem";

type NavBarPropsType = {
    data: navbarType
}

export const NavBar = (props: NavBarPropsType) => {

    const {data} = props

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
            <div className={styles.friendsBlock}>
                <h4>Друзья</h4>
                <div className={styles.friendsWrapper}>
                    {data.friendsBlock.map(friend => <FriendItem friendInfo={friend}/>)}
                </div>
            </div>
        </div>
    )
}