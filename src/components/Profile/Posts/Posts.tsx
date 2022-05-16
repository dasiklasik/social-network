import React from "react";
import { postType } from "../../../redux/state";
import {PostItem} from "./PostItem/PostItem";
import {PostForm} from "./PostForm";

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
            <PostForm/>
            <div>
                {postsData.map(post => (
                    <PostItem message={post.message}/>
                ))}
            </div>
        </div>
    )
}



