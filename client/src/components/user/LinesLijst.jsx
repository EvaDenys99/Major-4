import React, { Component } from "react";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";

import styles from "./LinesLijst.module.css";
import stylesTypo from "./../../styles/typo.module.css";
import cogoToast from "cogo-toast";
const io = require(`socket.io-client`);

class LinesLijst extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    this._isMounted = true;
    const messages = [];
    const socket = io.connect(`:3000`);

    socket.on(`chat message`, function(msg) {
      this._isMounted = true;
      if (this._isMounted) {
        cogoToast.success(msg, {
          position: `top-center`
        });
        messages.push(msg);
        // window.scrollTo(0, document.body.scrollHeight);
        console.log(messages);
        stateAanpassing(messages);
        return messages;
      }
    });

    const stateAanpassing = messages => {
      this.setState({ messages: messages });
      return messages;
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
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
