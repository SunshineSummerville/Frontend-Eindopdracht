import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import styles from './SignUpForm.module.css';
import axios from "axios";
import {Link, useHistory} from "react-router-dom";


export default function SignUpForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [registerSucces, setRegisterSucces] = useState (false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    // const [searchTerm, setSearchTerm] = useState("");

    //const userName = useState(")

    async function onSubmit(data) {
        // e.preventDefault()
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
                role: ["user"]


            });

            console.log(result);
            setRegisterSucces(true);
            history.push("/signin");
        } catch (e) {
            console.error(e);

        }
        setLoading(false);

        console.log(data)

    }


    return (
        <>
            <form
                className={styles.signupForm}
                onSubmit={handleSubmit(onSubmit)}
            >
                <label
                    className={styles.title_gebruikersnaam}
                    htmlFor="userName">Username</label>
                <input name={"username"}
                       type="text"
                       ref={register({required: true, minLength: 2})}/>
                {errors.username && <span>This field is required</span>}

                <label
                    htmlFor="password">Password</label>
                <input name={"password"}
                       type="password"
                       ref={register({required: true, minLength: 6})}/>
                {errors.password &&
                <span>This field is required</span>}

                <label htmlFor="firstName">Firstname</label>
                <input name={"firstname"} type="text" ref={register({required: true, minLength: 2})}/>
                {errors.firstname && <span>This field is required</span>}

                <label htmlFor="lastName">Lastname</label>
                <input name={"lastname"} type="text" ref={register({required: true, minLength: 2})}/>
                {errors.lastname && <span>This field is required</span>}

                <label htmlFor="email">Email</label>
                <input name={"email"} type="text"
                       ref={register({required: true, minLength: 2, pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/})}/>
                {errors.email && <span>This field is required</span>}

                <label htmlFor="phoneNumber">Phonenumber</label>
                <input name={"phonenumber"} type="text" ref={register({required: true, minLength: 3, maxLength:10})}/>
                {errors.phonenumber && <span>Size must be between 3 and 10 && This field is required</span>}

                <label htmlFor="street">Street</label>
                <input name={"street"} type="text" ref={register({required: true, minLength: 2})}/>
                {errors.street && <span>This field is required</span>}

                <label htmlFor="houseNumber">Housenumber</label>
                <input name={"housenumber"} type="text" ref={register({required: true, minLength: 1})}/>
                {errors.housenumber && <span>This field is required</span>}

                <label htmlFor="postalCode">Postalcode</label>
                <input name={"postalcode"} type="text" ref={register({required: true, minLength: 4})}/>
                {errors.postalcode && <span>Postalcode should be 4 numbers and 2 letters. & pls without space inbetween</span>}

                <label htmlFor="provincie">Provincie</label>
                <input name={"provincie"} type="text" ref={register({required: false, minLength: 4})}/>


                <input type="submit"

                />
                {registerSucces === true && <span> "Registered succesfully" </span>}
                {loading === true && <span> "Loading..." </span>}


            </form>

            <p> Returning visitor? please sign in <Link to="/signin">here.</Link></p>
        </>
    );



}

