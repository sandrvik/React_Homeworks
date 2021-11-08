import React from "react";
import { useState } from "react/cjs/react.development";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input"

export const Main = (props) => {
    const [value, setValue] = useState(100);

    const handleChange = ({ target: { value } }) => {
        setValue(value)
    }

    const logOut = () => {
        props.handleAuth(false)
    }

    return (
        <>
            <h1>Main Page</h1>
            <Input
                type="number"
                value={value}
                onChange={handleChange}
                min="0"
                max="100"
            />
            <Input
                type="range"
                value={value}
                onChange={handleChange}
            />
            <Button onClick={logOut} title="logOut" />
        </>

    )
}