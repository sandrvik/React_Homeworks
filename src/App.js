import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Test from './components/Test/Test';
import Title from './components/Title/Title';
import Form from './modules/Form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      valueForTest: 1,
      isOpenModal: false
    }
  }

  toggleStateKey = (key) => {
    return () => {
      this.setState(prevState => {
        return { [key]: !prevState[key] }
      })
    }
  }

  toggleModal = this.toggleStateKey('isOpenModal')

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
        <Title
          text="First task"
          className="title"
        />
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
        <Title
          text="Second task"
          className="title"
        />
        <Test
          trigger={15}
          value={this.state.valueForTest}
          handleClick={this.handleClick}
          onChange={this.onChangeTest}
        />
        <Title
          text="Third task"
          className="title"
        />
        <Button onClick={this.toggleModal} text={this.state.isOpenModal ? "Close form" : "Open form"} />
        {this.state.isOpenModal
          &&
          <Form
            title="Sign Up"
            closeModal={this.toggleModal}
          />}
      </div>
    )
  }
}

export default App;