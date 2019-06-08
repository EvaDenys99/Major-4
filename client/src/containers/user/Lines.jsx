import React, { Component } from "react";
import Select from "react-select";
import NavigatieLines from "./../../components/user/NavigatieLines";
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

    const handleSelection = e => {
      console.log(e.value);
      if (e.value === `antwerpen`) {
        console.log(`antwerpen`);
      }
      console.log(messages);

      //in principe zou dit toch moeten werken:
      // const gefilterdeMessages = [];
      // messages.map(message =>
      //   e.value === message.zaal
      //     ? gefilterdeMessages.push(message)
      //     : console.log(`nope`)
      // );

      // this.setState({ messages: gefilterdeMessages });
    };

    const { messages } = this.state;

    const options = [
      { label: `antwerpen`, value: `antwerpen` },
      { label: `gent`, value: `gent` },
      { label: `'t eilandje`, value: `eilandje` }
    ];

    return (
      <>
        {/* {console.log(messages)} */}
        <h1>Overzicht</h1>
        <p>Bekijk hier de vorige pushlines</p>
        <Select name="" id="" onChange={handleSelection} options={options} />

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
