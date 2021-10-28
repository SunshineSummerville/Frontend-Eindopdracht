import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import jwt_Decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});
function AuthContextProvider({children}) {
    const history = useHistory();
    const [authState, setAuthState] = useState({user: null, status: "pending"});
    console.log("AUTH", authState)

    async function fetchUserData(JWToken) {
        const decoded = jwt_Decode(JWToken);
        const username = decoded.sub;
        localStorage.setItem("token", JWToken)
        console.log("USERid", username, "DECODED", decoded)

        try {
            const result = await axios.get(`http://localhost:8080/api/user/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${JWToken}`,
                }
            })
             console.log(" fetchUserdata waar ben je?",result)
            setAuthState({
                user: {
                    firstname: result.data.firstname,
                    lastname: result.data.lastname,
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,

                },
                token:JWToken,
                status: "done",
            });

        } catch (e) {
            console.error(e)
            logoutFunction();
            console.log("Hallo")
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token !== null && authState.user === null) {
            fetchUserData(token);
        } else {
            setAuthState({
                user: null,
                token:null,
                status: "done"
            });
        }
    }, [])

    async function loginFunction(JWToken) {
        console.log(JWToken)
        // console.log("DECODED", decoded)
        localStorage.setItem("token", JWToken);
        fetchUserData(JWToken);


    }


    function logoutFunction() {
        console.log("LOGOUT")
        localStorage.clear();
        setAuthState({user: null, token: null, status: "done"});
        history.push("/");
    }

    const data = {
        ...authState,
        authState: authState,
        login: loginFunction,
        logout: logoutFunction,
    }

// console.log(authState.status)

    return (
        <AuthContext.Provider value={data}>
            {authState.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;