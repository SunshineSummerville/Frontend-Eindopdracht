import React, {useContext, useEffect, useState,} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

// [] replace hello world with reservationpage component
// [] GET reservation Id from the url using use Params from react router
// []Make a get request to the backend api/reservation/24

export default function ReservationDetails(){
    const params = useParams();
    const [reservationDetails, setReservationDetails] = useState();
    const {authState} = useContext (AuthContext);

    console.log("PARAMS do we see the reservation ID?", params)
    console.log("AUTH IN RESERVATION DETAILS", authState)

    useEffect(()=> {
        async function getReservationDetails() {
            // const reservationId = {
            //     reservationId:reservationId
            // }
            const result = await axios.get(`http://localhost:8080/api/reservation/${params.reservationId}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authState.token}`,
                }
            })
            setReservationDetails(result.data)
            console.log("Result what is the result of our request",result);
        }

        getReservationDetails()
    },[])

    console.log("DETAILS", reservationDetails)

    return (
        <div className= 'reservation details'>
            <h2>Reservation Details</h2>
            {reservationDetails && <img src={reservationDetails.image} />}
            <div>
                {reservationDetails((reservation)=> {
                    console.log("MY RESERVATION",reservation)
                })}
                    </div>
        </div>
    )


}