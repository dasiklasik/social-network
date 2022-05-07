import React from "react";
import { messageType } from "../../../redux/state";

type MessageItemPropsType = {
    messageInfo: messageType
}
export const MessageItem = (props: MessageItemPropsType) => {

    const {
        messageInfo
    } = props

    return (
        <li key={messageInfo.id}>{messageInfo.message}</li>
    )
}