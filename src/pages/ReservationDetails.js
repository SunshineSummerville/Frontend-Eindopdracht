import React, {useContext, useEffect, useState,} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

// [] replace hello world with reservationpage component
// [] GET reservation Id from the url using use Params from react router
// []Make a get request to the backend api/reservation/24

export default function ReservationDetails(){
    const params = useParams();
    const [reservationDetails, setReservationDetails] = useState();
    const {authState} = useContext (AuthContext);
    const [editMode,setEditmode] = useState(false);
    const [newDate,setNewdate] = useState();
    console.log("EDITMODE", editMode)
    console.log("New Date",newDate)

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
            setReservationDetails(result.data);
            setNewdate(result.data.reservationDate);
            console.log("Result what is the result of our request",result);
        }

        getReservationDetails()
    },[])

    console.log("DETAILS", reservationDetails)
    console.log("ID", reservationDetails && reservationDetails.id)

    const changeEditmode = ()=> {
        setEditmode(true)
        // console.log("Hello world")
    }

    const changeTheDate = (event)=> {
        setNewdate(event.target.value);
        console.log("Hello world",event.target.value)
    }

    const today= new Date()
    console.log(today.getDate())
    const minDate= `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`

    const saveTheDate = ()=> {
        console.log("SAVE THE DATE",newDate, reservationDetails.id, authState.token)
        modifyReservation();
    }

    async  function modifyReservation() {
        const requestbody = {
            reservationDate:newDate
        }
        const response = await axios.patch(`http://localhost:8080/api/reservation/${params.reservationId}`, requestbody, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authState.token}`,
            }
        })

        console.log("PATCH RESPONSE",response)

    }



    return (
        <div className= 'reservation details'>
            <h2>Reservation Details</h2>
            {reservationDetails && <img src={reservationDetails.image} alt="Your uploaded file" />}
            <p>Reserveringsnummer: { reservationDetails && reservationDetails.id}</p>
            {editMode ? <input onChange={changeTheDate} type="date" min={minDate} value={newDate}/> : <p>Datum: { reservationDetails && reservationDetails.reservationDate}</p>}
            <p>Category: { reservationDetails && reservationDetails.category.name}</p>
            <p>Contact gegevens: </p>
            <p>Handyman: { reservationDetails && reservationDetails.handyman.firstname} - { reservationDetails && reservationDetails.handyman.lastname}</p>
            <p>Email: { reservationDetails && reservationDetails.handyman.email}</p>
            <p>Telefoonnummer: { reservationDetails && reservationDetails.handyman.phonenumber}</p>

            {editMode ? <button onClick={saveTheDate}>Save</button> :  <button onClick={changeEditmode}>edit</button>}



                </div>
    )


}