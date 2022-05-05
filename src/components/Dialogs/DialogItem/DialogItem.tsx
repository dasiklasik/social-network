import React from "react";
import {dialogType} from "../Dialogs";
import {NavLink} from "react-router-dom";
import styles from './DialogItem.module.css'

type DialogItemPropsType = {
    dialogInfo: dialogType
}
export const DialogItem = (props: DialogItemPropsType) => {

    const {
        dialogInfo
    } = props

    return (
        <li key={dialogInfo.id}>
            <NavLink className={({isActive}) => isActive ? styles.active : ''} to={`dialogs/${dialogInfo.id}`}>{dialogInfo.name}</NavLink>
        </li>
    )
}