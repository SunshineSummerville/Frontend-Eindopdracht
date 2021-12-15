import {Link} from "react-router-dom";
import React from "react";

export default function HandymanItem ({handyman, selectedCategory}) {
    return <li key={handyman.id}>
        {handyman.firstname} - {handyman.lastname} <Link to={`/categories/${selectedCategory.id}/handymen/${handyman.id}/reservation`} ><button> Book now</button></Link>
    </li>

}
