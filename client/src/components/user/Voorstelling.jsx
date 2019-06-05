import React from "react";

const Voorstelling = ({ voorstelling }) => {
  return (
    <>
      <p>{voorstelling.id}</p>
      <img src={voorstelling.imageUser} alt="foto" />
      <p>{voorstelling.titel}</p>
      <p>progressiebar</p>
      <p>{voorstelling.duur}</p>
      <p>{voorstelling.pauze}</p>
      <p>{voorstelling.discription}</p>
      <label>
        <input type="checkbox" />
        <span> on en off</span>
      </label>
    </>
  );
};

export default Voorstelling;
