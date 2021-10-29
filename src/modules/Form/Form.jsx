import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';

import './Form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            error: false
        }
    }

    onChange = (key) => {
        return ({ target: { value } }) => {
            this.setState({ [key]: value })
        }
    }

    saveUser = () => {
        localStorage.setItem(
            this.state.name,
            JSON.stringify(
                { email: this.state.email, password: this.state.password }
            )
        )
    }

    isFieldsFilled = () => {
        return !!this.state.name && !!this.state.email && !!this.state.password
    }

    handleSignUp = () => {
        if (this.isFieldsFilled()) {
            this.setState({ error: false })
            this.saveUser();
            this.props.closeModal()
        } else {
            this.setState({ error: true })
        }
    }

    onChangeName = this.onChange('name');
    onChangeEmail = this.onChange('email');
    onChangePassword = this.onChange('password');

    render() {
        return (
            <div className="form">
                <span
                    onClick={this.props.closeModal}
                    className="form__close"
                >
                    X
                </span>
                <Title
                    text={this.props.title}
                    className="form__title"
                />
                <Input
                    className="form__field"
                    name="Name:"
                    type="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                />
                <Input
                    className="form__field"
                    name="Email:"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />
                <Input
                    className="form__field"
                    name="Password:"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                />
                {this.state.error && <span>Fill all inputs</span>}
                <Button text={this.props.title} onClick={this.handleSignUp} />
            </div>
        )
    }
}