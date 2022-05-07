import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {stateType} from "./redux/state";


type AppPropsType = {
    state: stateType
}


const App = (props: AppPropsType) => {

    const {
        state
    } = props

    return (
        <div className="App">

            <Header/>
            <div className={'flex-content'}>
                <NavBar data={state.navbar}/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile data={state.profilePage}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs data={state.dialogsPage}/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
