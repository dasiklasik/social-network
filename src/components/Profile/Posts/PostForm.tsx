import React from "react";

type PostFormPropsType = {
    newPostText: string
    changePostInputValue: (value: string) => void
    addPost: () => void
}

export const PostForm = (props: PostFormPropsType) => {

    const {
        newPostText,
        changePostInputValue,
        addPost
    } = props

    const postLink = React.createRef<HTMLTextAreaElement>()

    const onChangeHandler = () => {
        if (postLink.current) {
            let text = postLink.current?.value
            changePostInputValue(text)
        }

    }

    return (
        <div>
            <textarea onChange={onChangeHandler} value={newPostText} ref={postLink}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
    )
}