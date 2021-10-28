import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Title from './components/Title/Title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value: value })
  }

  render() {
    return (
      <div className="App">
        <Title text="First task" />
        <Input
          type="range"
          onChange={this.onChange}
          value={this.state.value}
          min="1"
          max="100"
        />
        <Input
          type="number"
          onChange={this.onChange}
          value={this.state.value}
          min="1"
          max="100"
        />
        <Title text="Second task" />

      </div>
    )
  }
}

export default App;