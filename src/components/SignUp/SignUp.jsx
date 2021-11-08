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

    const checkPasswords = () => {
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

    const checkLogin = (login) => {
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
        const errorChecks = [checkPasswords(), checkLogin(fields.login), checkEmptyFields(fields)]
        if (!errorChecks.some(i => i === true))
            setStorage(fields.login, { name: fields.name, password: fields.password });

    }

    return (
        <Form onSubmit={onSubmit}>
            <Input name="name" type="text" value={fields.name} onChange={onChange} />
            <Input name="login" type="text" value={fields.login} onChange={onChange} />
            <Input name="password" type="password" value={fields.password} onChange={onChange} />
            <Input name="repPassword" type="password" value={fields.repPassword} onChange={onChange} />
            <ErrorBlock errors={errors} />
            <Button disabled={checkEmptyFields(fields)} title="Sign Up" />
        </Form>
    )
}