import React from "react";

import switchImg from "../../assets/user/switch.png";

const VertaalForm = () => {
  return (
    <>
      <select name="" id="">
        <option value="Nederlands" />
      </select>
      <img src={switchImg} alt="switch" width="50" height="50" />
      <p>Engels</p>
      <input type="text" value="Ik ken geen andere taal" />
      <p>I don't know any other languages</p>
      <button>Vertaal</button>
    </>
  );
};

export default VertaalForm;
