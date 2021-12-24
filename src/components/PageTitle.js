import React from "react";
import "./PageTitle.css";

export function PageTitle(props) {
    return <h2 className={"page-title"}>{props.title}</h2>;
}