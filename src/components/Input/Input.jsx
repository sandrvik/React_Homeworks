import React from "react";
import "./Input.css"

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = ({ target: { value } }) => {
        this.setState({ value })
    }

    render() {
        const { type, placeholder } = this.props;
        return (
            <input
                type={type}
                placeholder={`Type ${placeholder ?? type} here...`}
                onChange={this.onChange}
                value={this.state.value}
            />
        )
    }
}