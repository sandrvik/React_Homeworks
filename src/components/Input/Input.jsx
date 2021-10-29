import React from 'react';

export default class Input extends React.Component {

    render() {
        return (
            <>
                <span>{this.props.name}</span><input {...this.props} />
            </>
        )
    }
}