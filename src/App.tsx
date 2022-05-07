import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {stateType} from "./index";


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
                <NavBar/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile postsData={state.postsData}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs
                        messagesData={state.messagesData}
                        dialogsData={state.dialogsData}
                    />}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
