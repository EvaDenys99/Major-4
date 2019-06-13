import React, { Component } from "react";
import { decorate, observable } from "mobx";
import { observer, inject } from "mobx-react";

import styles from "./LinesLijst.module.css";
import stylesTypo from "./../../styles/typo.module.css";
import cogoToast from "cogo-toast";
const io = require(`socket.io-client`);
const socket = io.connect(`/lines`);
class LinesLijst extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentWillMount() {
    socket.close();
    socket.off(`chat message`);
  }

  componentDidMount() {
    const messages = [];
    socket.open();
    socket.on(`chat message`, function(msg) {
      cogoToast.success(msg, {
        position: `top-center`
      });
      messages.push(msg);
      console.log(messages);
      stateAanpassing(messages);
      return messages;
    });

    const stateAanpassing = messages => {
      this.setState({ messages: messages });
      return messages;
    };
  }

  componentWillUnmount() {
    socket.close();
    socket.off(`chat message`);
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

export default inject(`lineStore`)(observer(LinesLijst));
