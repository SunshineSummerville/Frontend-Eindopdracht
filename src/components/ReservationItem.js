import React from "react";
import {Link} from "react-router-dom";

export default function ReservationItem ({reservation}) {
    return <li key={reservation.id}>
        {reservation.id} - {reservation.reservationDate} - {reservation.category.name}
        <Link to={`/reservations/${reservation.id}`} ><button> See details</button></Link>
    </li>
}
