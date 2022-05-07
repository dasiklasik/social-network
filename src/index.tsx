import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {v1} from "uuid";

export type postType = {
    id: string
    message: string
    likesCount: number
}

export type messageType = {
    id: string
    message: string
    myMessage: boolean
}

export type dialogType = {
    id: string
    name: string
}

export type stateType = {
    postsData: Array<postType>
    messagesData: Array<messageType>
    dialogsData: Array<dialogType>
}

export const state: stateType = {
    postsData: [
        {id: '1', message: 'some message', likesCount: 12},
        {id: '2', message: 'some message', likesCount: 10},
        {id: '3', message: 'new message', likesCount: 0},
    ],
    messagesData: [
        {id: v1(), message: 'Hi!', myMessage: false},
        {id: v1(), message: 'Hello!', myMessage: true},
        {id: v1(), message: 'How are you?', myMessage: false},
        {id: v1(), message: 'I am OK', myMessage: true},
    ],
    dialogsData: [
        {id: v1(), name: 'Dasha'},
        {id: v1(), name: 'Masha'},
        {id: v1(), name: 'Olly'},
        {id: v1(), name: 'Andry'},
        {id: v1(), name: 'Sasha'},
    ],
}



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
