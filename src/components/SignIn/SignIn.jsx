import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";

export const SignIn = (props) => {
    const [fields, setFields] = useState({
        login: '',
        password: '',
    })

    const onChange = ({ target: { value, name } }) => {
        setFields({
            ...fields,
            [name]: value
        })
    }

    const checkEmptyFields = (fields) => {
        return Object.values(fields).some(field => field === '')
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (localStorage.getItem(fields.login) && JSON.parse(localStorage.getItem(fields.login)).password === fields.password) {
            console.log('Got it!')
        }

    }

    return (
        <Form onSubmit={onSubmit}>
            <Input name="login" type="text" value={fields.login} onChange={onChange} />
            <Input name="password" type="password" value={fields.password} onChange={onChange} />
            <Button disabled={checkEmptyFields(fields)} title="Sign In" />
        </Form>
    )
}