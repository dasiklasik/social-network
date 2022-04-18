import React from "react";
import {PostItem} from "./PostItem/PostItem";

const postsState = [
    {id: '1', message: 'some message',},
    {id: '2', message: 'some message',},
    {id: '3', message: 'new message',},
]

export const Posts = () => {
    return (
        <div>
            <h2>Мои посты</h2>
            <div>
                {postsState.map(post => (
                    <PostItem message={post.message}/>
                ))}
            </div>
        </div>
    )
}

