import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {stateType, storeType} from "./redux/state";


type AppPropsType = {
    store: storeType
}


const App = (props: AppPropsType) => {

    const {
        store
    } = props

    return (
        <div className="App">

            <Header/>
            <div className={'flex-content'}>
                <NavBar data={store.state.navbar}/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile
                        data={store.state.profilePage}
                        changePostInputValue={store.changePostInputValue}
                        addPost={store.addPost}
                    />}/>
                    <Route path={'/dialogs/*'} element={<Dialogs
                        data={store.state.dialogsPage}
                        changeMessageValue={store.changeMessageInputValue}
                        addMessage={store.addMessage}
                    />}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
