import React from 'react'
import { useForm } from "react-hook-form";
import './SignUpForm.css'
import axios from "axios";

export default function SignUpForm() {
    const { register, handleSubmit, errors } = useForm();

    //const userName = useState(")

    function onSubmit(data) {
        // e.preventDefault()
        // try {
        //     const result = await axios.post('http://localhost:8080/api/auth/signup', {register.name,});
        //
        //     console.log(result);
        // } catch (e) {
        //     console.error(e);
        //
        // }


        console.log(data)

    }


    return <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Username</label>
        <input name={"userName"} type="text" ref={register({ required: true,minLength:2 })}/>
        {errors.userName && <span>This field is required</span>}

        <label htmlFor="password">Password</label>
        <input name={"password"} type="password" ref={register({ required: true,minLength:2 })}/>
        {errors.password && <span>This field is required</span>}

        <label htmlFor="firstName">Firstname</label>
        <input name={"firstName"} type="text" ref={register({ required: true,minLength:2 })}/>
        {errors.firstName && <span>This field is required</span>}

        <label htmlFor="lastName">Lastname</label>
        <input name={"lastName"} type="text" ref={register({ required: true,minLength:2 })}/>
        {errors.lastName && <span>This field is required</span>}

        <label htmlFor="gender">Gender</label>
        <select name="gender" ref={register({ required: true })}>
            <option value=""> Select...</option>
            <option value="non binary">Non binary</option>
            <option value="female">Female</option>
            <option value="male">Male</option>

        </select>

        <label htmlFor="street">Street</label>
        <input name={"street"} type="text" ref={register({ required: true,minLength:2 })}/>
        {errors.street && <span>This field is required</span>}

        <label htmlFor="houseNumber">Housenumber</label>
        <input name={"houseNumber"} type="text" ref={register({ required: true,minLength:1 })}/>
        {errors.houseNumber && <span>This field is required</span>}

        <label htmlFor="postalCode">Postalcode</label>
        <input name={"postalCode"} type="text" ref={register({ required: true,minLength:4 })}/>
        {errors.postalCode && <span>This field is required</span>}

        <label htmlFor="email">Email</label>
        <input name={"email"} type="text" ref={register({ required: true,minLength:2, pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ })}/>
        {errors.email && <span>This field is required</span>}

        <input type="submit"

               />


    </form>

}

// bij r 56 submit nog een //onClick={onSubmit} toevoegen?
