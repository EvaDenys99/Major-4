import React, { Component } from "react";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";
const io = require(`socket.io-client`);

class Lines extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { messages: [] };
    const socket = io.connect(`:3000`);
    const messages = [];

    socket.on(`chat message`, function(msg) {
      messages.push(msg);
      // window.scrollTo(0, document.body.scrollHeight);
      console.log(messages);
      stateAanpassing(messages);
      return messages;
    });

    const stateAanpassing = messages => {
      this.setState({ messages: messages });
      return messages;
    };
  }
  render() {
    const showMessage = (message, index) => {
      return <li key={index}>{message}</li>;
    };

    const { messages } = this.state;

    return (
      <>
        {/* {console.log(messages)} */}
        <ul id="messages" />
        <ul>
          {messages.length > 0 ? (
            messages.map((message, index) => showMessage(message, index))
          ) : (
            <div>
              <p>Nog geen messages.</p>
            </div>
          )}
        </ul>
      </>
    );
  }
}

decorate(Lines, {
  messages: observable
});

export default observer(Lines);
