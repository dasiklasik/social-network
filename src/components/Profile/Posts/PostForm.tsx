import React from "react";

type PostFormPropsType = {
    newPostText: string
    changePostInputValue: (value: string) => void
}

export const PostForm = (props: PostFormPropsType) => {

    const {
        newPostText,
        changePostInputValue
    } = props

    const postLink = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = postLink.current?.value
        alert(text)
    }

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