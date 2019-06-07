import React from "react";
import NavigatieLines from "./../../components/user/NavigatieLines";
const io = require(`socket.io-client`);

const Lines = () => {
  const socket = io.connect(`http://localhost:3000`);
  const messages = [];

  socket.on(`chat message`, function(msg) {
    messages.push(msg);
    window.scrollTo(0, document.body.scrollHeight);
    console.log(messages);
    return messages;
  });

  console.log(messages);

  return (
    <>
      <h1>Push Lines Overzicht</h1>
      <p>Bekijk hier de vorige pushlines</p>
      <ul id="messages" />
      <ul>
        {messages.map(message => (
          <li key={message}>{message}</li>
        ))}
        {/* <li>
          <p>De geit is een belangrijke plot twist, mis hem niet!</p>
        </li>
        <li>
          <p>Blablabla</p>
        </li> */}
      </ul>
      <NavigatieLines />
    </>
  );
};

export default Lines;
