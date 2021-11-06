import React from 'react';

export const Input = (props) => {

    const {
        className,
        placeholder,
        onChange,
        value
    } = props;

    return (
        <input
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}