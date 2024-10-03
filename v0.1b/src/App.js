import React from "react";
import AuthorizationWin from "./components/AuthorizationWin";
import PersonalArea from "./components/PersonalArea";
import HomePage from './components/HomePage';
import AdminPanel_userbase from './components/AdminPanel_userbase';
import AdminPanel from './components/AdminPanel';
import UserInfo from './components/UserInfo';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/AuthorizationWin" element={<AuthorizationWin />} />
                    <Route path="/PersonalArea" element={<PersonalArea />} />
                    <Route path="/AdminPanel" element={<AdminPanel />} />
                    <Route path="/AdminPanel_userbase" element={<AdminPanel_userbase />} />
                    <Route path="/UserInfo" element={<UserInfo />} />
                    
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
