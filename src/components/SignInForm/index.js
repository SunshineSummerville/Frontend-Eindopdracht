import React from 'react';
import { useForm } from "react-hook-form";
import styles from './SignInForm.module.css';
import axios from "axios";


export default function SignInForm() { //TODO eerst checken of gebruiker al bestaat
    const { register, handleSubmit, errors } = useForm();


    async function onSubmit (data)  {


        try {
            const result = await axios.post('http://localhost:8080/api/auth/signin',{
                username: data.username,
                password: data.password


            });

            console.log(result);
        } catch (e) {
            console.error(e);

        }

        console.log(data)

    }


    return <form className={styles.signinForm} onSubmit={handleSubmit(onSubmit)}>
        <label  htmlFor="userName">Username</label>
        <input  name={"username"} type="text" ref={register({ required: true,minLength:2 })}/>
        {errors.username && <span>This field is required</span>}

        <label htmlFor="password">Password</label>
        <input name={"password"} type="password" ref={register({ required: true,minLength:2 })}/>
        {errors.password && <span>This field is required</span>}



        <input type="submit"

        />


    </form>

}


