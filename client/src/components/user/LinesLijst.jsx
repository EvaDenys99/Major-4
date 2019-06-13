import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { decorate, observable } from "mobx";
import styles from "./LinesLijst.module.css";
import stylesTypo from "./../../styles/typo.module.css";
import cogoToast from "cogo-toast";
const io = require(`socket.io-client`);

class BaseLinesLijst extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.socket = io.connect(`:${this.props.port}`);

    const messages = [];
    this.socket.open();
    this.socket.on(`chat message`, function(msg) {
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

  // componentWillMount() {
  //   this.socket.close();
  //   this.socket.off(`chat message`);
  // }

  // componentDidMount() {
  //   const messages = [];
  //   this.socket.open();
  //   this.socket.on(`chat message`, function(msg) {
  //     cogoToast.success(msg, {
  //       position: `top-center`
  //     });
  //     messages.push(msg);
  //     console.log(messages);
  //     stateAanpassing(messages);
  //     return messages;
  //   });

  //   const stateAanpassing = messages => {
  //     this.setState({ messages: messages });
  //     return messages;
  //   };
  // }

  componentWillUnmount() {
    this.socket.close();
    this.socket.off(`chat message`);
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

decorate(BaseLinesLijst, {
  messages: observable
});

inject(`lineStore`)(observer(BaseLinesLijst));

const LinesLijst = ({ portStore }) => {
  const { port } = portStore;
  if (port) return <BaseLinesLijst port={port} />;
  return <p>Loading</p>;
};

export default inject(`portStore`)(observer(LinesLijst));
