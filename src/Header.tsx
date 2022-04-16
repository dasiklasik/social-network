import React from "react";
import logo from './assets/logo.png'
import styles from './header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt={'logo'}/>
        </div>
    )
}