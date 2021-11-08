import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";

export const SignIn = () => {
    return (
        <Form title="Sign In">
            <Input title="Name: " type="text" />
            <Input title="Password: " type="password" />
            <Button title="Sign In" />
            <Link to="/signup">Sign Up</Link>
        </Form>
    )
}