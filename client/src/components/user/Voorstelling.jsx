import React from "react";
import ProgressBar from "./Progressbar";
import { Link } from "react-router-dom";

const Voorstelling = ({ voorstelling }) => {
  return (
    <>
      <Link to="/">Terug</Link>
      <img src={voorstelling.imageUser} alt="foto" />
      <p>{voorstelling.titel}</p>
      <p>progressiebar</p>
      <ProgressBar />
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
