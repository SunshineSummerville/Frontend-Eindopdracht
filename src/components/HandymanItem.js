import {Link} from "react-router-dom";
import React, {useContext} from 'react'
import {AuthContext} from "../context/AuthContext";

export default function HandymanItem ({handyman, selectedCategory}) {
    const {authState} = useContext(AuthContext);

    return <li key={handyman.id}>
        {handyman.firstname} - {handyman.lastname}
        {(authState.user === null ||    authState.user.roles.some(role=>role.name === "ROLE_USER")) &&
        <Link to={`/categories/${selectedCategory.id}/handymen/${handyman.id}/reservation`} ><button> Book now</button></Link>}
    </li>

}
