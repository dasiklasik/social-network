import React from "react";
import styles from './profile.module.css'
import wallpaper from '../../assets/wallpaper.jpg'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    data: profilePageType
}

export const Profile = (props: ProfilePropsType) => {

    const {
        data
    } = props

    return (
        <div className={styles.profile}>
            <div className={styles.wallpaper}>
                <img src={wallpaper} alt={'wallpaper'}/>
            </div>
            <ProfileInfo/>
            <Posts postsData={data.postsData}/>
        </div>
    )
}

