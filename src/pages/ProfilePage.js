import React, {useContext} from 'react';
import Profile from "../components/ProfilePage";
import {AuthContext} from "../context/AuthContext";

export default function ProfilePage(){
    // const { user } = useContext(AuthContext);
    // console.log(user);


    return (
        <div>
            <h2>ProfilePage</h2>
            <Profile/>

        </div>
    )

}



