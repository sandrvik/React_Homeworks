import React from "react";
import "./Balloon.css";
import classNames from "classnames";

export default class Balloon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStartPosition: true
        }
    }

    moveBalloon = () => {
        this.setState(prevState => {
            return { isStartPosition: !prevState.isStartPosition }
        })
    }

    render() {
        const balloonClass = classNames({
            balloon: true,
            'balloon-start': this.state.isStartPosition,
            'balloon-end': !this.state.isStartPosition
        });
        return (
            <div className={balloonClass} onClick={this.moveBalloon}></div>
        )
    }
}