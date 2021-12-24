import React, {useContext, useEffect, useState} from 'react'
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import ReservationItem from "../components/ReservationItem";
import {PageTitle} from "../components/PageTitle";
import "./ReservationHistory.css";


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
            <PageTitle title={"reservation history"}/>
            <ul>
                {reservations.map((reservation)=>{
                    return <ReservationItem key={reservation.id} reservation={reservation}/>
                })}
            </ul>
        </section>
    );


}