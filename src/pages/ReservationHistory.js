import React, {useContext, useEffect, useState} from 'react'
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";
//Dit component moet iets doen zodra de pagina wordt weergegeven:
// useEffect gebruik console.log om te zien of het werkt
//Data ophalen,
//async function maken en aanroepen. dan axios , url gebruiken en dan response loggen
//Data opslaan
//  State aanmaken en daarvan de setter gebruiken
//Data weergeven
//Return met de JSX {} en .map


export default function ReservationHistory(){

    const [reservations,setReservations] = useState([]);
    const {authState} = useContext (AuthContext);

    console.log("AUTH IN RESERVATIONHISTORY", authState)



    useEffect(()=>{
        async function getReservations(){
            const userId = authState.user.id

            const response = await axios.get(`http://localhost:8080/api/user/${userId}/reservations`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authState.token}`,
                }
            })
            setReservations(response.data);

            console.log("RESPONSE?",response.data);
        }

        getReservations();

    },[])

    console.log("Reservations", reservations)

    return (
        <div className= 'ReservationHistory'>
            <h2>ReservationHistory</h2>
            <div>
                {reservations.map((reservation)=>{
                    console.log("OVERVIEW OF ALL RESERVATIONS",reservation)
                    return <li>
                        {reservation.id} - {reservation.reservationDate} - {reservation.category.name}
                        <Link to={`/reservations/${reservation.id}`} ><button> See details</button></Link>
                    </li>
                })}
            </div>
        </div>
    );


}