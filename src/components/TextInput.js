import React from "react";
import "./TextInput.css";

export function TextInput(props) {
    return <>
        <label className={"input-label"} htmlFor={props.name}>{props.name}</label>
        <input placeholder={props.name} className={"form-input"} name={props.name} type={props.type}
               ref={props.register(props.rules)}/>
        {props.errors[props.name] && <span className={"error-message"}>This field is required</span>}

    </>
}