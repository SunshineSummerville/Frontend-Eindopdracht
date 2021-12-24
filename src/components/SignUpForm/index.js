import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import {emailPattern} from "../../utils/validation";
import {Form} from "../Form";
import {TextInput} from "../TextInput";
import {SubmitButton} from "../SubmitButton";
import {SuccessMessage} from "../SuccessMessags";
import {LoadingMessage} from "../LoadingMessage";
import "./SignUpForm.css";


export default function SignUpForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [registerSucces, setRegisterSucces] = useState (false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    async function onSubmit(data) {
        setLoading(true);


        try {
            const result = await axios.post('http://localhost:8080/api/auth/signup', {
                username: data.username,
                password: data.password,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                phonenumber: data.phonenumber,
                street: data.street,
                housenumber: data.housenumber,
                postalcode: data.postalcode,
                provincie: data.provincie,
                role: [data.role]


            });
            if (result){
                setRegisterSucces(true);
                history.replace("/signin");

            }


        } catch (e) {
            //@TODO do we need something here?

        }
        setLoading(false);


    };


    return (
        <>
            <Form
                onSubmit={(onSubmit)} handleSubmit={handleSubmit}
            >
                <div className={"user-role"}>
                    <label htmlFor="user"> User </label>
                    <input type="radio" id="user" name="role" value="user" ref={register}/>
                    <label htmlFor="handyman"> Handyman </label>
                    <input type="radio" id="handyman" name="role" value="handyman" ref={register}/>
                </div>

                <TextInput name={"username"} errors={errors} register={register} type={"text"} rules={{ required: true,minLength:2 }}/>
                <TextInput name={"password"} errors={errors} register={register} type={"password"} rules={{ required: true,minLength:6 }}/>
                <TextInput name={"firstname"} errors={errors} register={register} type={"text"} rules={{ required: true,minLength:2 }}/>
                <TextInput name={"lastname"} errors={errors} register={register} type={"text"} rules={{ required: true,minLength:2 }}/>
                <TextInput name={"email"} errors={errors} register={register} type={"text"} rules={{ required: true,minLength:2, pattern: emailPattern }}/>
                <TextInput name={"phonenumber"} errors={errors} register={register} type={"text"} rules={{ required: true, minLength: 3, maxLength:10 }}/>
                <TextInput name={"street"} errors={errors} register={register} type={"text"} rules={{ required: true, minLength: 2}}/>
                <TextInput name={"housenumber"} errors={errors} register={register} type={"text"} rules={{ required: true, minLength: 1}}/>
                <TextInput name={"postalcode"} errors={errors} register={register} type={"text"} rules={{ required: true, minLength: 4}}/>
                <TextInput name={"provincie"} errors={errors} register={register} type={"text"} rules={{ required: false, minLength: 4}}/>

                <SubmitButton>Sign up</SubmitButton>

                {registerSucces === true &&  <SuccessMessage> Registered successfully </SuccessMessage>}
                {loading === true && <LoadingMessage>  Loading</LoadingMessage>}

                <p className={"returning"}> Returning visitor? please sign in <Link to="/signin">here.</Link></p>

            </Form>

        </>
    );



}

