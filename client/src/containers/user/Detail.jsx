import React from "react";

import Voorstelling from "./../../components/user/Voorstelling";
import MeerVoorstellingen from "./../../components/user/MeerVoorstellingen";

import Navigatie from "./../../components/user/Navigatie";

const Detail = () => {
  return (
    <>
      <h1>Detailpagina</h1>
      <h2>Antwerpen</h2>
      <Voorstelling />
      <MeerVoorstellingen />
      <Navigatie />
    </>
  );
};

export default Detail;
