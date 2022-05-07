import React from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    data: dialogsPageType
}




export const Dialogs = (props: DialogsPropsType) => {


    const {
        data,
    } = props


    return (
        <div className={styles.wrapper}>
            <h2>Диалоги</h2>
            <div className={styles.flexWrapper}>
                <div>
                    <ul>
                        {data.dialogsData.map(d => {
                            return (
                                <DialogItem dialogInfo={d}/>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <ul>
                        {
                            data.messagesData.map(m => {
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


