import React from 'react'
import { useForm } from "react-hook-form";
import './SignUpForm.css'

export default function SignUpForm() {
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data) {
        //console.log(data)

    }
    //console.log("errors", errors)

    return <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Username</label>
        <input name={"userName"} type="text" ref={register({ required: true,minLength:2 })}/>
        {errors.userName && <span>This field is required</span>}

        <label htmlFor="password">Password</label>
        <input name={"password"} type="password" ref={register({ required: true,minLength:2 })}/>
        {errors.password && <span>This field is required</span>}

        <label htmlFor="firstName">Username</label>
        <input name={"firstName"} type="text" ref={register({ required: true,minLength:2 })}/>
        {errors.firstName && <span>This field is required</span>}

        <label htmlFor="lastName">Username</label>
        <input name={"lastName"} type="text" ref={register({ required: true,minLength:2 })}/>
        {errors.lastName && <span>This field is required</span>}

        <label htmlFor="gender">Gender</label>
        <select name="gender" ref={register({ required: true })}>
            <option value=""> Select...</option>
            <option value="non binary">Non binary</option>
            <option value="female">Female</option>
            <option value="male">Male</option>

        </select>

        <label htmlFor="street">Username</label>
        <input name={"street"} type="text" ref={register({ required: true,minLength:2 })}/>
        {errors.street && <span>This field is required</span>}

        <label htmlFor="houseNumber">Username</label>
        <input name={"houseNumber"} type="text" ref={register({ required: true,minLength:1 })}/>
        {errors.houseNumber && <span>This field is required</span>}

        <label htmlFor="postalCode">Username</label>
        <input name={"postalCode"} type="text" ref={register({ required: true,minLength:4 })}/>
        {errors.postalCode && <span>This field is required</span>}

        <label htmlFor="email">Username</label>
        <input name={"email"} type="text" ref={register({ required: true,minLength:2, pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ })}/>
        {errors.email && <span>This field is required</span>}

        <input type="submit" ref={register}/>
    </form>

}