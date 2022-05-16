import React from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogsPageType} from "../../redux/state";
import {SuperForm} from "../SuperComponents/SuperForm";


type DialogsPropsType = {
    data: dialogsPageType
    changeMessageValue: (value: string) => void
    addMessage: () => void
}




export const Dialogs = (props: DialogsPropsType) => {


    const {
        data,
        changeMessageValue,
        addMessage,
    } = props



    return (
        <div className={styles.wrapper}>
            <h2>Диалоги</h2>
            <SuperForm value={data.newMessageValue}
                       changeInputValue={changeMessageValue}
                       addItem={addMessage}/>
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



