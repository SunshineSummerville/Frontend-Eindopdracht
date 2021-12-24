import React from "react";
import {Link} from "react-router-dom";
import "./ReservationItem.css";

export default function ReservationItem ({reservation}) {
    return <li className={"history-item"} key={reservation.id}>
        {reservation.id} - {reservation.reservationDate} - {reservation.category.name}
        <Link to={`/reservations/${reservation.id}`} ><button className={"see-details-button"}> See details</button></Link>
    </li>
}
