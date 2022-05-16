import React from "react";
import {postType, profilePageType} from "../../../redux/state";
import {PostItem} from "./PostItem/PostItem";
import {PostForm} from "./PostForm";

type PostsPropsType = {
    profileData: profilePageType
    changePostInputValue: (value: string) => void
}

export const Posts = (props: PostsPropsType) => {

    const {
        profileData,
        changePostInputValue
    } = props

    return (
        <div>
            <h2>Мои посты</h2>
            <PostForm changePostInputValue={changePostInputValue} newPostText={profileData.newPostText}/>
            <div>
                {profileData.postsData.map(post => (
                    <PostItem message={post.message}/>
                ))}
            </div>
        </div>
    )
}



