import React from "react";
import styles from './profile.module.css'
import wallpaper from '../../assets/wallpaper.jpg'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import {postType} from "../../index";

type ProfilePropsType = {
    postsData: Array<postType>
}

export const Profile = (props: ProfilePropsType) => {

    const {
        postsData
    } = props

    return (
        <div className={styles.profile}>
            <div className={styles.wallpaper}>
                <img src={wallpaper} alt={'wallpaper'}/>
            </div>
            <ProfileInfo/>
            <Posts postsData={postsData}/>
        </div>
    )
}

