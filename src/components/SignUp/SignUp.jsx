import React from "react";
import { Button } from "../Button/Button";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";

export const SignUp = () => {
    return (
        <Form title="Sign Up">
            <Input title="Name:" type="text" />
            <Input title="Email:" type="email" />
            <Input title="Password:" type="password" />
            <Input title="Repeat password:" type="password" />
            <Button title="Sign Up" />
        </Form>
    )
}