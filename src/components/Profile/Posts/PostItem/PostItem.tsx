import React from "react";
import styles from './PostItem.module.css'
import avatar from '../../../../assets/ava.jpg'

type PostItemPropsType = {
    message: string
}

export const PostItem = (props: PostItemPropsType) => {

    const {message} = props

    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img src={avatar}/>
            </div>
            <div className={styles.message}>{message}</div>
        </div>
    )
}