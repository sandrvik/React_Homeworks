import React from "react";

import "./ErrorBlock.css";

export const ErrorBlock = ({ errors }) => {
    const spawnErrors = (obj) => {
        let errors = []
        for (let errorType in obj) {
            obj[errorType].error && errors.push(<p className="errorText" key={errorType}>{obj[errorType].message}</p>)
        }
        return errors
    }

    return (
        <>
            {spawnErrors(errors)}
        </>
    )
}