import React from "react";
import "./TextInput.css";

export function TextInput(props) {

    let errorMessage

    switch(props.errors[props.name]?.type) {
        case "required":
           errorMessage="This field is required"
            break;
        case "minLength":
            errorMessage="Your input is too short"
            break;

        case "maxLength":
            errorMessage="Your input is too long"
            break;

        case "pattern":
            errorMessage="This is not a valid email"
            break;


        default:
        errorMessage="This field is not correct"
    }

    return <>
        <label className={"input-label"} htmlFor={props.name}>{props.name}</label>
        <input placeholder={props.name} className={"form-input"} name={props.name} type={props.type}
               ref={props.register(props.rules)}/>
        {props.errors[props.name] && <span className={"error-message"}>{errorMessage}</span>}

    </>
}