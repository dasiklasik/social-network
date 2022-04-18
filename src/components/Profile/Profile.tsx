import React from "react";
import styles from './profile.module.css'
import wallpaper from '../../assets/wallpaper.jpg'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.wallpaper}>
                <img src={wallpaper} alt={'wallpaper'}/>
            </div>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}

