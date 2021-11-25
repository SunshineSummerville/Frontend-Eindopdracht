import React, {useContext, useEffect, useState} from 'react'
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";


export default function ReservationHistory(){

    const [reservations,setReservations] = useState([]);
    const {authState} = useContext (AuthContext);


    useEffect(()=>{
        async function getReservations(){
            const userId = authState.user.id;

            const response = await axios.get(`http://localhost:8080/api/user/${userId}/reservations`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authState.token}`,
                }
            });
            setReservations(response.data);

        }

        getReservations();

    },[])


    return (
        <div className= 'ReservationHistory'>
            <h2>ReservationHistory</h2>
            <div>
                {reservations.map((reservation)=>{
                    return <li>
                        {reservation.id} - {reservation.reservationDate} - {reservation.category.name}
                        <Link to={`/reservations/${reservation.id}`} ><button> See details</button></Link>
                    </li>
                })}
            </div>
        </div>
    );


}