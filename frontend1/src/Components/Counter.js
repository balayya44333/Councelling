import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    },()=> console.log("fallback value"+ this.state.count));
    console.log(this.state.count)
  }

  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh'
    };

    const counterStyle = {
      fontFamily: 'Arial, sans-serif',
      border: '2px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      width: '200px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      textAlign: 'center'
    };

    const buttonStyle = {
      margin: '10px 0',
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    };

    return (
      <div style={containerStyle}>
        <div style={counterStyle}>
          <h1>Counter: {this.state.count}</h1>
          <button style={buttonStyle} onClick={() => this.increment()}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;