import React from 'react';
import "./Form.css";

export const Form = (props) => {
    const onSubmit = (e) => {
        e.preventDefault()
    }

    const {
        title,
        children,
    } = props;

    const spawnChildren = () => {
        return children.map((child, i) => {
            return <React.Fragment key={i}>
                {React.cloneElement(child)}
            </React.Fragment>
        })
    }

    return (
        <>
            <form onSubmit={onSubmit} className="form">
                <h3 className="form__title">{title}</h3>
                {spawnChildren()}
            </form>
        </>
    )
}