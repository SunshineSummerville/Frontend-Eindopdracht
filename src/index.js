import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContext"
import LanguageContext from "./context/LanguageContext";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            {/*<LanguageContextProvider>*/}
                <AuthContextProvider>
                    <App/>
                </AuthContextProvider>
            {/*</LanguageContextProvider>*/}

        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


