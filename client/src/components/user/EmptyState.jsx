import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";

import emptyVoorstelling from "../../assets/user/emptyVoorstelling.png";

import styles from "./../../components/user/Voorstelling.module.css";
import stylesUI from "./../../styles/uiControls.module.css";

const EmptyState = ({ id, zaalStore }) => {
  console.log(id);

  const hoofdZaal = zaalStore.findByHoofdZaalId(id);
  const bijZaal = zaalStore.findByBijZaalId(id);

  return hoofdZaal ? (
    <>
      <img
        src={hoofdZaal.imgEmpty}
        alt="foto"
        className={styles.foto}
        width="375"
      />
      <div className={styles.header}>
        <div>
          <Link to="/" className={stylesUI.back} />
        </div>
        <p>{hoofdZaal.naam}</p>
      </div>
      <div className={styles.containerEmpty}>
        <p>Er zijn momenteel geen voorstellingen hier.</p>
        <img src={emptyVoorstelling} alt="titel" />
      </div>
    </>
  ) : bijZaal ? (
    <>
      <img
        src={bijZaal.imgEmpty}
        alt="foto"
        className={styles.foto}
        width="375"
      />
      <div className={styles.header}>
        <div>
          <Link to="/" className={stylesUI.back} />
        </div>
        <p>{bijZaal.naam}</p>
      </div>
      <div className={styles.containerEmpty}>
        <p>Er zijn momenteel geen voorstellingen hier.</p>
        <img src={emptyVoorstelling} alt="titel" />
      </div>
    </>
  ) : (
    <div className={styles.container}>
      <p>Er zijn momenteel geen voorstellingen hier.</p>
      <img src={emptyVoorstelling} alt="titel" />
    </div>
  );
};

export default inject(`zaalStore`)(EmptyState);
