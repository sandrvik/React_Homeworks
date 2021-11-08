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
        return Object.values(fields).some(field => field === '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (JSON.parse(localStorage.getItem(fields.login))?.password === fields.password) {
            props.handleAuth(true);
            props.history.push('/');
        } else {
            props.history.push('/signup');
        }

    }

    return (
        <Form onSubmit={onSubmit} title="Sign In">
            <Input
                name="login"
                type="text"
                value={fields.login}
                onChange={onChange}
                label="Login"
            />
            <Input
                name="password"
                type="password"
                value={fields.password}
                onChange={onChange}
                label="Password" />
            <Button disabled={checkEmptyFields(fields)} title="Sign In" />
        </Form>
    )
}