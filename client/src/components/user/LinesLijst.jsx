import React, { Component } from "react";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";

import styles from "./LinesLijst.module.css";
import stylesTypo from "./../../styles/typo.module.css";

const io = require(`socket.io-client`);

class LinesLijst extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { messages: [] };
    const socket = io.connect(`:3000`);
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
      return (
        <p key={index} className={styles.item}>
          {message}
        </p>
      );
    };

    const { messages } = this.state;

    return (
      <>
        {/* {console.log(messages)} */}
        {/* <ul id="messages" /> */}
        <div>
          {messages.length > 0 ? (
            <div className={styles.container}>
              {messages.map((message, index) => showMessage(message, index))}
            </div>
          ) : (
            <p className={stylesTypo.userParagraphs}>Nog geen messages...</p>
          )}
        </div>
      </>
    );
  }
}

decorate(LinesLijst, {
  messages: observable
});

export default observer(LinesLijst);
