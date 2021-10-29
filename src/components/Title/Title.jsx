import React from 'react';
import './Title.css';

export default class Title extends React.Component {

    render() {
        return (
            <div className={this.props.className}>{this.props.text}</div>
        )
    }
}