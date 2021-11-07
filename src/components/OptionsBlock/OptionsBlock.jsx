import React from 'react';

import './OptionsBlock.css';

export const OptionsBlock = (props) => {
    return (
        <div className="optionsBlock">
            <h4 className="optionsBlock__header">{props.title}</h4>
            <div className="optionsBlock__options">
                {props.children.map((child, i) => {
                    return React.cloneElement(child, { key: i })
                })}
            </div>
        </div>
    )
}