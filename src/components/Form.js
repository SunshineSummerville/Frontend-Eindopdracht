import React from "react";
import "./Form.css";

export function Form(props) {
    return <form className={"form"} onSubmit={props.handleSubmit(props.onSubmit)}>
        {props.children}
    </form>

}