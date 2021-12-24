import React from "react";
import "./SubmitButton.css";

export function SubmitButton(props) {
    return <button className={"form-button"} type="submit">
        {props.children}
    </button>


}