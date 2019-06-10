import React from "react";
import { inject } from "mobx-react";

import Voorstelling from "./../../components/user/Voorstelling";
import MeerVoorstellingen from "./../../components/user/MeerVoorstellingen";

import NavigatieHome from "../../components/user/NavigatieHome";

import emptyVoorstelling from "../../assets/user/emptyVoorstelling.png";

const Detail = ({ id, voorstellingStore }) => {
  const voorstelling = voorstellingStore.findByZaalId(id);
  const voorstellingen = voorstellingStore.findAllesByZaalId(id);
  const alleVoorstellingen = voorstellingStore.getAll();

  return voorstelling ? (
    <>
      <Voorstelling voorstelling={voorstelling} />
      <p>Ook in deze zaal</p>
      <MeerVoorstellingen voorstellingen={voorstellingen} />
      <NavigatieHome />
    </>
  ) : (
    <>
      <div>Geen voorstellingen</div>
      <img src={emptyVoorstelling} alt="titel" />
      <p>In andere zalen</p>
      <MeerVoorstellingen voorstellingen={alleVoorstellingen} />
      <NavigatieHome />
    </>
  );
};

export default inject(`voorstellingStore`)(Detail);
