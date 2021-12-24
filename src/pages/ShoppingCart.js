import React, {useState, useContext} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import {Link, useHistory,useParams} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {formatMinDate} from "../utils/dateFunction";
import {PageTitle} from "../components/PageTitle";
import {Form} from "../components/Form";
import "./ShoppingCart.css";
import {SubmitButton} from "../components/SubmitButton";
import {SuccessMessage} from "../components/SuccessMessags";

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
    const minDate= formatMinDate(today);


    return (
        <>
            <PageTitle title={"Book a handyman"}/>
            <Form
                onSubmit={(onSubmit)} handleSubmit={handleSubmit}
            >

                <label className={"input-label"}
                       htmlFor="reservationDate">Reservation Date</label>
                <input className={"form-input"}
                       name={"reservationDate"}
                       type="date"
                       min={minDate}
                       ref={register({required: true})}/>

                <input className={"form-input"}
                       name={"image"}
                       type="file"
                       ref={register()}
                />
                {errors.reservationDate &&
                <span>This field is required</span>}


                {newReservationSucces === true && <SuccessMessage> Reservation made successfully </SuccessMessage>}
                {newReservationSucces === false && <span> "something went wrong, please try again" </span>}


                {authState.user === null ?
                    <p className={"signup-reminder"}> Please sign in <Link to="/signin">here.</Link> or <Link to="/signup"> create an account </Link> </p>
                    :
                    <SubmitButton>Sign up</SubmitButton>
                }


            </Form>
        </>


    );




}