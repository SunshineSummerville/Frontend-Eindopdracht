import React from "react";
import "./LoadingMessage.css";

export function LoadingMessage(props) {
    return <span className={"loading-message"}>
        {props.children}
    </span>
}