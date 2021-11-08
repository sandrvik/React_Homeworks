import React from 'react';
import './Input.css'

export const Input = (props) => {
    const [value, changeValue] = React.useState('');

    const onChange = ({ target: { value } }) => {
        changeValue(value);
    }

    const {
        type,
        title,
    } = props;

    return (
        <>
            <p className="input__title">{title}</p>
            <input
                className="input__area"
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    )
}