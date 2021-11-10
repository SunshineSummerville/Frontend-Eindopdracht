import {useForm} from "react-hook-form";
import styles from './HandymanSignup.css';
import axios from "axios";


export default function SignUpForm() {
    const {register, handleSubmit, errors} = useForm();




    async function onSubmit(data) {


        // e.preventDefault()


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
                role: ["handyman"]


            });

            console.log(result);
        } catch (e) {
            console.error(e);

        }

        console.log(data)

    }


    return <form
        type="handyman"
        className={styles.handymanSignupForm}
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
        <input name={"phonenumber"} type="text" ref={register({required: true, minLength: 1})}/>
        {errors.phonenumber && <span>This field is required</span>}

        <label htmlFor="street">Street</label>
        <input name={"street"} type="text" ref={register({required: true, minLength: 2})}/>
        {errors.street && <span>This field is required</span>}

        <label htmlFor="houseNumber">Housenumber</label>
        <input name={"housenumber"} type="text" ref={register({required: true, minLength: 1})}/>
        {errors.housenumber && <span>This field is required</span>}

        <label htmlFor="postalCode">Postalcode</label>
        <input name={"postalcode"} type="text" ref={register({required: true, minLength: 4})}/>
        {errors.postalcode && <span>This field is required</span>}

        <label htmlFor="provincie">Provincie</label>
        <input name={"provincie"} type="text" ref={register({required: false, minLength: 4})}/>


        <input type="submit"

        />


    </form>

}

