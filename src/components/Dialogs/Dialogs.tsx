import React from "react";
import styles from './Dialogs.module.css'
import {v1} from "uuid";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem";


export type messageType = {
    id: string
    message: string
    myMessage: boolean
}

export type dialogType = {
    id: string
    name: string
}

export const dialogsData: Array<dialogType> = [
    {id: v1(), name: 'Dasha'},
    {id: v1(), name: 'Masha'},
    {id: v1(), name: 'Olly'},
    {id: v1(), name: 'Andry'},
    {id: v1(), name: 'Sasha'},
]

export const Dialogs = () => {



    const messagesData: Array<messageType> = [
        {id: v1(), message: 'Hi!', myMessage: false},
        {id: v1(), message: 'Hello!', myMessage: true},
        {id: v1(), message: 'How are you?', myMessage: false},
        {id: v1(), message: 'I am OK', myMessage: true},
    ]

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


