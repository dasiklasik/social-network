import React from 'react';
import './App.css';
import {Header} from "./Header";
import {NavBar} from "./NavBar";
import {Profile} from "./Profile";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className={'flex-content'}>
                <NavBar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
