import React, { Component } from "react";
import NavigatieLines from "./../../components/user/NavigatieLines";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";
const io = require(`socket.io-client`);

class Lines extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    const socket = io.connect(`http://localhost:3000`);
    const messages = [];

    socket.on(`chat message`, function(msg) {
      messages.push(msg);
      window.scrollTo(0, document.body.scrollHeight);
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
        {console.log(messages)}
        <h1>Push Lines Overzicht</h1>
        <p>Bekijk hier de vorige pushlines</p>
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
        <NavigatieLines />
      </>
    );
  }
}

decorate(Lines, {
  messages: observable
});

export default observer(Lines);
