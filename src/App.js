import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Test from './components/Test/Test';
import Title from './components/Title/Title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      valueForTest: 1
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  onChangeTest = ({ target: { value } }) => {
    this.setState({ valueForTest: +value })
  }

  handleClick = () => {
    this.setState(prevState => {
      return { valueForTest: prevState.valueForTest + 1 }
    })
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
        <Test
          trigger={15}
          value={this.state.valueForTest}
          handleClick={this.handleClick}
          onChange={this.onChangeTest}
        />
      </div>
    )
  }
}

export default App;