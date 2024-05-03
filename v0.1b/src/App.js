import React from "react";
import AuthorizationWin from "./components/AuthorizationWin";
import HomePage from './components/HomePage';
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
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
