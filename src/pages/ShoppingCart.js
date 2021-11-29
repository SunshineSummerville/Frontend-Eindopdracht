import React, {useState, useContext} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import {Link, useHistory,useParams} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function readFile(file){
    return new Promise((resolve, reject) => {
        var fr = new FileReader();
        fr.onload = () => {
            resolve(fr.result )
        };
        fr.onerror = reject;
        fr.readAsDataURL(file);
    });
}

export default function ShoppingCart() {
    const params = useParams();
    const {authState} = useContext (AuthContext);
    const {register, handleSubmit, errors} = useForm();
    const [newReservationSucces, setNewReservationSucces] = useState (null);
    const history = useHistory();


    async function onSubmit(data) {
        let base64Image = null
        if(data.image.length >=1){
            base64Image = await readFile(data.image[0]);

        }
        const reservation = {
            reservationDate:data.reservationDate,
            categoryId:params.categoryId,
            handymanId:params.handymanId,
            customerId:authState.user.id,
            image:base64Image
        }

        try {
            const response = await axios.post('http://localhost:8080/api/reservation',reservation,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authState.token}`,
                }
            });
            if (response.status === 201) {
                setNewReservationSucces(true);
                history.push(`/reservations/${response.data.id}`)
            }

        } catch (e) {
            if (e.response.status === 400) {
                setNewReservationSucces(false);
            }
        }

    };


    const today= new Date();
    const minDate= `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;


    return (
            <form

                onSubmit={handleSubmit(onSubmit)}
            >
                <label
                    htmlFor="reservationDate">Reservation Date</label>
                <input name={"reservationDate"}
                       type="date"
                       min={minDate}
                       ref={register({required: true})}/>

               <input name={"image"}
                      type="file"
                      ref={register()}
               />
                {errors.reservationDate &&
                <span>This field is required</span>}


                {newReservationSucces === true && <span> "Reservation made succesfully" </span>}
                {newReservationSucces === false && <span> "something went wrong, please try again" </span>}


                {authState.user === null ? <p> Please sign in <Link to="/signin">here.</Link> or <Link to="/signup"> create an account </Link> </p> :
                    <input type="submit"

                />}


            </form>


    );




}