import React from "react";
import {postType, profilePageType} from "../../../redux/state";
import {PostItem} from "./PostItem/PostItem";
import {PostForm} from "./PostForm";
import {SuperForm} from "../../SuperComponents/SuperForm";

type PostsPropsType = {
    profileData: profilePageType
    changePostInputValue: (value: string) => void
    addPost: () => void
}

export const Posts = (props: PostsPropsType) => {

    const {
        profileData,
        changePostInputValue,
        addPost
    } = props

    return (
        <div>
            <h2>Мои посты</h2>
            <SuperForm value={profileData.newPostValue}
                       changeInputValue={changePostInputValue}
                       addItem={addPost}
            />
            <div>
                {profileData.postsData.map(post => (
                    <PostItem message={post.message}/>
                ))}
            </div>
        </div>
    )
}



