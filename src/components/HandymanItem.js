import {Link} from "react-router-dom";
import React, {useContext} from 'react'
import {AuthContext} from "../context/AuthContext";
import "./HandymanItem.css";

export default function HandymanItem ({handyman, selectedCategory}) {
    const {authState} = useContext(AuthContext);

    return <li className={"handyman-item"} key={handyman.id}>
        <span className={"handyman-name"}> {handyman.firstname} - {handyman.lastname} </span>
        {(authState.user === null ||    authState.user.roles.some(role=>role.name === "ROLE_USER")) &&
        <Link to={`/categories/${selectedCategory.id}/handymen/${handyman.id}/reservation`} ><button className={"book-handyman-button"}> Book now</button></Link>}
    </li>

}
