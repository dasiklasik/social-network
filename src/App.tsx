import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";

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
