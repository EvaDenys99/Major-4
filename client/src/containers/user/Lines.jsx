import React from "react";

import NavigatieLines from "./../../components/user/NavigatieLines";

const Vertaal = messages => {
  console.log(messages);
  return (
    <>
      <h1>Push Lines Overzicht</h1>
      <p>Bekijk hier de vorige pushlines</p>
      <ul>
        {/* {messages.map(message => (
          <ul key={message}>
            <li>{message}</li>
          </ul>
        ))} */}
        <li>
          <p>De geit is een belangrijke plot twist, mis hem niet!</p>
        </li>
        <li>
          <p>Blablabla</p>
        </li>
      </ul>
      <NavigatieLines />
    </>
  );
};

export default Vertaal;
