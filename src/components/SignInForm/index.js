import React, {useContext,useState} from 'react';
import {  useForm } from "react-hook-form";
import styles from './SignInForm.module.css';
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


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
            <form className={styles.signinForm} onSubmit={handleSubmit(onSubmit)} >
                <label  htmlFor="userName">Username</label>
                <input  name={"username"} type="text" ref={register({ required: true,minLength:2 })}/>
                {errors.username && <span>This field is required</span>}

                <label htmlFor="password">Password</label>
                <input name={"password"} type="password" ref={register({ required: true,minLength:2 })}/>
                {errors.password && <span>This field is required</span>}



                <button type="submit"

                >
                    inloggen
                </button>

                {loginSucces === true && <span> "Logged in succesfully" </span>}
                {loading === true && <span> "Loading..." </span>}


            </form>

            <p> Don't have an account yet? Please <Link to="/signup">register.</Link> first</p>

        </>
    );


}


