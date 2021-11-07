import React, { useState } from "react";
import { Button } from "../Button/Button";

import "./Modal.css"

export const Modal = (props) => {
    const [isActive, toggleActive] = useState(false);

    const handleClick = () => toggleActive(prevState => !prevState);

    const spawnChildren = () => {
        if (Array.isArray(props.children)) {
            return props.children.map((child, i) => {
                return React.cloneElement(child, { key: i })
            })
        } else {
            return React.cloneElement(props.children)
        }
    }

    return (
        <div>
            <Button
                onClick={handleClick}
                title={isActive ? props.titleActive : props.titleHidden}
            />
            {isActive && <div className="modal">
                {spawnChildren()}
            </div>}
        </div>
    )
}