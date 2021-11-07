import React from "react";

import "./Task.css"

export const Task = (props) => {
    const {
        number,
        backColor,
        textColor,
        text,
        onClick,
        completed,
        handleTaskComplete
    } = props

    const style = {
        backgroundColor: backColor,
        color: textColor,
        textDecoration: completed ? 'line-through' : 'none',
    }

    return (
        <div className="task">
            <input
                onClick={handleTaskComplete}
                type="checkbox"
            />
            <span>{number}. </span>
            <p
                style={style}
                className="task__text">
                {text}
            </p>
            <span className="task__delete" onClick={onClick}>&#10008;</span>
        </div>
    )
}