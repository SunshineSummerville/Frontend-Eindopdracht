import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [authState, setAuthState] = useState ({
        user: null
    });

    function loginFunction() {

    }

    function logoutFunction() {
    }

    const data = {
        ...authState,
        login: loginFunction,
        logout: logoutFunction
    }


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );


}

export default AuthContextProvider;