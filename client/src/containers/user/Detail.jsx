import React from "react";
import { inject } from "mobx-react";

import Voorstelling from "./../../components/user/Voorstelling";
import MeerVoorstellingen from "./../../components/user/MeerVoorstellingen";
import EmptyState from "./../../components/user/EmptyState.jsx";

import NavigatieHome from "../../components/user/NavigatieHome";

import styles from "./Detail.module.css";
import stylesLayout from "./../../styles/layout.module.css";

const Detail = ({ id, voorstellingStore }) => {
  const voorstelling = voorstellingStore.findByZaalId(id);
  const voorstellingen = voorstellingStore.findAllesByZaalId(id);
  const alleVoorstellingen = voorstellingStore.getAll();

  return voorstelling ? (
    <>
      <div className={stylesLayout.layout}>
        <Voorstelling voorstelling={voorstelling} />
        <div className={styles.container}>
          <div>
            <p className={styles.meerTitel}>Ook in deze zaal</p>
          </div>
          <MeerVoorstellingen voorstellingen={voorstellingen} />
        </div>
        <NavigatieHome />
      </div>
    </>
  ) : (
    <>
      <div className={stylesLayout.layout}>
        <EmptyState id={id} />
        <div className={styles.container}>
          <div>
            <p className={styles.meerTitel}>In andere zalen</p>
          </div>

          <MeerVoorstellingen voorstellingen={alleVoorstellingen} />
        </div>

        <NavigatieHome />
      </div>
    </>
  );
};

export default inject(`voorstellingStore`)(Detail);
