import React from "react";
import { inject } from "mobx-react";

import Voorstelling from "./../../components/user/Voorstelling";
import MeerVoorstellingen from "./../../components/user/MeerVoorstellingen";

import NavigatieHome from "../../components/user/NavigatieHome";

import emptyVoorstelling from "../../assets/user/emptyVoorstelling.png";

const Detail = ({ id, voorstellingStore }) => {
  const voorstelling = voorstellingStore.findById(id);
  const voorstellingen = voorstellingStore.findByZaalId(id);

  return voorstelling ? (
    <>
      <Voorstelling voorstelling={voorstelling} />
      <p>Ontdek meer</p>
      <MeerVoorstellingen voorstellingen={voorstellingen} />
      <NavigatieHome />
    </>
  ) : (
    <>
      <div>Geen voorstellingen</div>
      <img src={emptyVoorstelling} alt="titel" />
      <p>Ontdek meer</p>
      <MeerVoorstellingen voorstellingen={voorstellingen} />
      <NavigatieHome />
    </>
  );
};

export default inject(`voorstellingStore`)(Detail);
