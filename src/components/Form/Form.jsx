import React from "react";
import "./Form.css";

import Title from "../Title/Title";
import Input from "../Input/Input";

export default class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <div className="form__title">
                    <Title text="Registration Form" />
                </div>
                <div className="form__body">
                    <Input type="text" placeholder="name" />
                    <Input type="password" />
                    <Input type="email" />
                </div>
            </div>
        )
    }
}