import React, {useContext, useEffect, useState} from 'react'
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import ReservationItem from "../components/ReservationItem";


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

    },[authState.token, authState.user.id])


    return (
        <section className= 'ReservationHistory'>
            <h2>ReservationHistory</h2>
            <ul>
                {reservations.map((reservation)=>{
                    return <ReservationItem key={reservation.id} reservation={reservation}/>
                })}
            </ul>
        </section>
    );


}