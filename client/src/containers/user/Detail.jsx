import React from "react";

import Voorstelling from "./../../components/user/Voorstelling";
import MeerVoorstellingen from "./../../components/user/MeerVoorstellingen";

import NavigatieHome from "../../components/user/NavigatieHome";

const Detail = () => {
  return (
    <>
      <Voorstelling />
      <p>Ontdek meer</p>
      <MeerVoorstellingen />
      <NavigatieHome />
    </>
  );
};

export default Detail;
