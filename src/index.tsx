import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export type postType = {
    id: string
    message: string
    likesCount: number
}

export type stateType = {
    postsData: Array<postType>
}

const state: stateType = {
    postsData: [
        {id: '1', message: 'some message', likesCount: 12},
        {id: '2', message: 'some message', likesCount: 10},
        {id: '3', message: 'new message', likesCount: 0},
    ]
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
