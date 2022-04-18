import styles from './ProfileInfo.module.css'
import avatar from "../../../assets/ava.jpg";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.avatar}>
                <img src={avatar} alt={'avatar'}/>
            </div>
            <div className={styles.info}>
                <h1>Name</h1>
            </div>
        </div>
    )
}