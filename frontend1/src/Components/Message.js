import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'WELCOME VISITOR',
      buttonClicked: false,
    };
  }

  changeMessage = () => {
    this.setState({
      message: 'YOU ARE AWESOME!',
      buttonClicked: true,
    });
  };

  render() {
    const { message, buttonClicked } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.message}>{message}</h1>
          {!buttonClicked ? (
            <button style={styles.button} onClick={this.changeMessage}>
              SUBSCRIBE NOW!
            </button>
          ) : (
            <div>
              <p style={styles.thankYouText}>Thank you for subscribing!</p>
              {/* Replace the URL with your image */}
              <img
                style={styles.image}
                alt="Subscription Thank You"
                src="image-url.jpg"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #74ebd5, #ACB6E5)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  content: {
    textAlign: 'center',
  },
  message: {
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#6C63FF',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s ease',
    outline: 'none',
  },
  thankYouText: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  image: {
    marginTop: '20px',
    maxWidth: '100%',
    borderRadius: '5px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
};

export default Message;
