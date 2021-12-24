import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContext";


ReactDOM.render(
    <React.StrictMode>
        <Router>
                <AuthContextProvider>
                    <App/>
                </AuthContextProvider>

        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


export {Form} from "./components/Form";
export {TextInput} from "./components/TextInput";
export {SubmitButton} from "./components/SubmitButton";
export {SuccessMessage} from "./components/SuccessMessags";
export {LoadingMessage} from "./components/LoadingMessage";