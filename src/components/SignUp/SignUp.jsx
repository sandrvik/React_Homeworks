import React, { useState } from "react";
import { Button } from "../Button/Button";
import { ErrorBlock } from "../ErrorBlock/ErrorBlock";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";

export const SignUp = (props) => {
    const [fields, setFields] = useState({
        name: '',
        login: '',
        password: '',
        repPassword: '',
    })

    const [errors, setErrors] = useState({
        password: {
            error: false,
            message: 'Passwords are not equal'
        },
        loginExists: {
            error: false,
            message: 'Login is occupied'
        },
    })

    const onChange = ({ target: { value, name } }) => {
        setFields({
            ...fields,
            [name]: value
        })
    }

    const setStorage = (key, obj) => {
        if (localStorage.getItem(key)) {
            console.log('estb')
        } else {
            localStorage.setItem(key, JSON.stringify(obj))
        }
    }

    const isWrongPasswords = () => {
        if (fields.password !== fields.repPassword) {
            setErrors(prevState => ({
                ...prevState,
                password: {
                    ...prevState.password,
                    error: true,
                }
            }));
            return true;
        } else {
            setErrors(prevState => ({
                ...prevState,
                password: {
                    ...prevState.password,
                    error: false,
                }
            }));
            return false
        }
    }

    const isWrongLogin = (login) => {
        if (localStorage.getItem(login)) {
            setErrors(prevState => ({
                ...prevState,
                loginExists: {
                    ...prevState.loginExists,
                    error: true,
                }
            }));
            return true;
        } else {
            setErrors(prevState => ({
                ...prevState,
                loginExists: {
                    ...prevState.loginExists,
                    error: false,
                }
            }));
            return false
        }
    }

    const checkEmptyFields = (fields) => {
        return Object.values(fields).some(field => field === '')
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const errorChecks = [isWrongPasswords(), isWrongLogin(fields.login), checkEmptyFields(fields)]
        if (!errorChecks.some(i => i === true)) {
            setStorage(fields.login, { name: fields.name, password: fields.password });
            props.history.push('/signin')
        }
    }

    return (
        <Form onSubmit={onSubmit} title="Sign Up">
            <Input
                name="name"
                type="text"
                value={fields.name}
                onChange={onChange}
                label="Name"
            />
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
                label="Password"
            />
            <Input
                name="repPassword"
                type="password"
                value={fields.repPassword}
                onChange={onChange}
                label="Repeat Password"
            />
            <ErrorBlock errors={errors} />
            <Button disabled={checkEmptyFields(fields)} title="Sign Up" />
        </Form>
    )
}