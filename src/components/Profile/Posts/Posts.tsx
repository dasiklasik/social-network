import React from "react";
import { postType } from "../../../redux/state";
import {PostItem} from "./PostItem/PostItem";

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

