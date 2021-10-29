import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default class Test extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.value > nextProps.trigger) {
            return false
        } else {
            return true
        }
    }

    render() {
        return (
            <>
                <Input
                    value={this.props.value}
                    type="number"
                    onChange={this.props.onChange}
                />
                <Button text="Add +1" onClick={this.props.handleClick} />
            </>
        )
    }
}