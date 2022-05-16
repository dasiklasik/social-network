import React from "react";

type SuperFormPropsType = {
    value: string
    changeInputValue: (value: string) => void
    addItem: () => void
}

export const SuperForm = (props: SuperFormPropsType) => {

    const {
        value,
        changeInputValue,
        addItem
    } = props

    const postLink = React.createRef<HTMLTextAreaElement>()

    const onChangeHandler = () => {
        if (postLink.current) {
            let text = postLink.current?.value
            changeInputValue(text)
        }

    }

    return (
        <div>
            <textarea onChange={onChangeHandler} value={value} ref={postLink}></textarea>
            <button onClick={addItem}>Add post</button>
        </div>
    )
}