import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import './SignInForm.css';
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Form} from "../Form";
import {TextInput} from "../TextInput";
import {SubmitButton} from "../SubmitButton";
import {SuccessMessage} from "../SuccessMessags";
import {LoadingMessage} from "../LoadingMessage";


export default function SignInForm() { //TODO eerst checken of gebruiker al bestaat
    const {login} = useContext (AuthContext);
    const { register, handleSubmit, errors } = useForm();
    const [loginSucces, setLoginSucces] = useState (false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    async function onSubmit (data)  {
        setLoading(true);

        try {
            const result = await axios.post('http://localhost:8080/api/auth/signin',{
                username: data.username,
                password: data.password


            });
            login(result.data.accessToken);
            localStorage.setItem('user_id', JSON.stringify(result.data) );
            localStorage.setItem("accesToken", result.data.accessToken);
            setLoginSucces(true);
            if(history.action === "PUSH" || history.action === "REPLACE") {
                history.goBack();

            }else{
                history.push("/");

            }


        } catch (e) {
            // console.error(e); @TODO Moet er nog iets met de error gebeuren?

        }
        setLoading(false);

    };

    return(
        <>
            <Form className={"form"} onSubmit={(onSubmit)} handleSubmit={handleSubmit}>
                <TextInput name={"username"} errors={errors} register={register} type={"text"} rules={{ required: true,minLength:2 }}/>
                <TextInput name={"password"} errors={errors} register={register} type={"password"} rules={{ required: true,minLength:2 }}/>

                <SubmitButton>Login</SubmitButton>

                {loginSucces === true && <SuccessMessage> Logged in successfully </SuccessMessage> }
                {loading === true && <LoadingMessage>  Loading</LoadingMessage>}

                <p className={"signup-reminder"}> Don't have an account yet? Please <Link to="/signup">register.</Link> first</p>

            </Form>


        </>
    );


}

