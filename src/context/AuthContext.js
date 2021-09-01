import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import jwt_Decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});
function AuthContextProvider({children}) {
    const history = useHistory();
    const [authState, setAuthState] = useState({user: null, status: "pending"});

    async function fetchUserData(JWToken) {
        const decoded = jwt_Decode(JWToken);
        const userId = decoded.sub;
        try {
            const result = await axios.get(`http://localhost:3000/600/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${JWToken}`,
                }
            })
            // console.log(result)
            setAuthState({
                user: {
                    firstname: result.data.firstname,
                    lastname: result.data.lastname,
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: "done",
            });

        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('Token')
        if (token !== null && authState.user === null) {
            fetchUserData(token);
        } else {
            setAuthState({
                user: null,
                status: "done"
            });
        }
    }, [authState.user])

    async function loginFunction(JWToken) {
        // console.log(JWToken)
        // console.log("DECODED", decoded)
        localStorage.setItem('Token', JWToken);
        fetchUserData(JWToken);
        history.push('/profile');
    }

    function logoutFunction() {
        console.log("LOGOUT")
        localStorage.clear();
        // setAuthState({user: null, status: "done"});
        history.push("/")
    }

    const data = {
        ...authState,
        login: loginFunction,
        logout: logoutFunction,
    }
    return (
        <AuthContext.Provider value={data}>
            {authState.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;