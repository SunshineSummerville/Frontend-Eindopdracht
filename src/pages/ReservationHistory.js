import React,{useEffect,useState} from 'react'
import axios from "axios";
//Dit component moet iets doen zodra de pagina wordt weergegeven:
// useEffect gebruik console.log om te zien of het werkt
//Data ophalen,
//async function maken en aanroepen. dan axios , url gebruiken en dan response loggen
//Data opslaan
//  State aanmaken en daarvan de setter gebruiken
//Data weergeven
//Return met de JSX {} en .map


export default function ReservationHistory(){

    const [reservations,setReservations] = useState([])

    useEffect(()=>{
        async function getReservations(){
            const token = localStorage.getItem("accesToken")
            console.log(token)
            const response = await axios.get("http://localhost:8080/api/user/1/reservations",{
                headers:{
                    Authorization:"Bearer " + token
                }
            })
            setReservations(response.data);

            console.log(response.data);
        }

        getReservations()

    },[])

    console.log("Reservations", reservations)

    return (
        <div className= 'ReservationHistory'>
            <h2>ReservationHistory</h2>
            <div>
                {reservations.map((reservation)=>{
                    console.log(reservation)
                    return <li>
                        {reservation.reservationDate} - {reservation.category.name}
                    </li>
                })}
            </div>
        </div>
    );


}