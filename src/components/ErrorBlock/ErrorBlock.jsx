import React from "react";

export const ErrorBlock = ({ errors }) => {
    const spawnErrors = (obj) => {
        let errors = []
        for (let errorType in obj) {
            obj[errorType].error && errors.push(<p key={errorType}>{obj[errorType].message}</p>)
        }
        return errors
    }

    return (
        <>
            {spawnErrors(errors)}
        </>
    )
}