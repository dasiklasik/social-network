import React from "react";
import {userType} from "../../../redux/state";
import styles from './FriendItem.module.css'

type FriendItemPropsType = {
    friendInfo: userType
}

export const FriendItem = (props: FriendItemPropsType) => {

    const {friendInfo} = props

    return (
        <div className={styles.friend}>
            <div className={styles.avatar}>
                <img  src={friendInfo.avatar}/>
            </div>
            <p>{friendInfo.name}</p>
        </div>
    )
}