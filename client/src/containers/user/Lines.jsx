import React from "react";

import NavigatieLines from "./../../components/user/NavigatieLines";

const Lines = messages => {
  console.log(messages);
  return (
    <>
      <h1>Push Lines Overzicht</h1>
      <p>Bekijk hier de vorige pushlines</p>
      <ul>
        {messages.messages.map(message => (
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
