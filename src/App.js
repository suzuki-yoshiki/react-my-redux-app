import React from 'react';

const App = () => {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0}
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    console.log("handleMinusButton")
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
