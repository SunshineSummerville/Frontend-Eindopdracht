import React from "react";
import "./SuccessMessage.css";

export function SuccessMessage(props) {
    return <span className={"success-message"}>
        {props.children}
    </span>
}
