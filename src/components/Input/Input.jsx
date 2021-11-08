import React from "react";
import "./Input.css";

export const Input = (props) => {

    return (
        <>
            <h4 className="label">{props.label}</h4>
            <input {...props} className="input" />
        </>
    )
}