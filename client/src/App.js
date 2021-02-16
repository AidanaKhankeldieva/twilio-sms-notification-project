import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipient: "",
      textmessage: "",
    };
  }

  sendText = (e) => {
    const { recipient, textmessage } = this.state;

    //pass var
    fetch(
      `/send-text?recipient=${recipient}&textmessage=${textmessage}` //http://localhost:5000
    ).catch((err) => console.log(err));
    this.setState({ recipient: "" });
    this.setState({ textmessage: "" });
  };

  render() {
    const { recipient, textmessage } = this.state;

    return (
      <div className='App'>
        <h1 className='textheader'>Send a message</h1>
        <form action='' onSubmit={(e) => e.preventDefault()}>
          <h3>Send to:</h3>
          <input
            type='text'
            placeholder='enter your number'
            value={recipient}
            onChange={(e) => this.setState({ recipient: e.target.value })}
          />

          <h3>Message: </h3>
          <textarea
            name=''
            id=''
            cols='30'
            rows='5'
            placeholder='your message'
            value={textmessage}
            onChange={(e) => this.setState({ textmessage: e.target.value })}
          ></textarea>

          <button onClick={this.sendText}>Send text</button>
        </form>
      </div>
    );
  }
}

export default App;
