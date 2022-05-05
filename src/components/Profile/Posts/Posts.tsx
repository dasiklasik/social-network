import React from "react";
import {PostItem} from "./PostItem/PostItem";
import {postType} from "../../../index";

type PostsPropsType = {
    postsData: Array<postType>
}

export const Posts = (props: PostsPropsType) => {

    const {
        postsData
    } = props

    return (
        <div>
            <h2>Мои посты</h2>
            <div>
                {postsData.map(post => (
                    <PostItem message={post.message}/>
                ))}
            </div>
        </div>
    )
}

