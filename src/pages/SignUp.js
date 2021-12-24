import React from 'react'
import SignUpForm from "../components/SignUpForm";
import {PageTitle} from "../components/PageTitle";

export default function SignUp(){
    return <section>
        <PageTitle title={"sign up"}/>
        <SignUpForm />
    </section>;


}