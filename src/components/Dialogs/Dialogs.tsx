import React from "react";
import styles from './Dialogs.module.css'
import {v1} from "uuid";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogType, messageType} from "../../index";


type DialogsPropsType = {
    messagesData: Array<messageType>
    dialogsData: Array<dialogType>
}




export const Dialogs = (props: DialogsPropsType) => {


    const {
        messagesData,
        dialogsData
    } = props


    return (
        <div className={styles.wrapper}>
            <h2>Диалоги</h2>
            <div className={styles.flexWrapper}>
                <div>
                    <ul>
                        {dialogsData.map(d => {
                            return (
                                <DialogItem dialogInfo={d}/>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <ul>
                        {
                            messagesData.map(m => {
                                return (
                                    <MessageItem messageInfo={m}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}


