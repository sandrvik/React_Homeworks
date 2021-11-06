import React from 'react';

import "./ColorOption.css"

export const ColorOption = (props) => {

    const style = {
        border: props.color === 'white' ? '2px solid black' : '2px solid white',
        outline: props.active ? '2px solid black' : 0,
        backgroundColor: props.color,
    }
    return (
        <div className="colorOption" onClick={props.onClick} style={style}></div>
    )
}