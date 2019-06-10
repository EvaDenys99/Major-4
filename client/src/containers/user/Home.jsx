import React from "react";
import { inject, observer } from "mobx-react";

import NavigatieHome from "../../components/user/NavigatieHome";
import ZaalLijst from "../../components/user/ZaalLijst";

import stylesLayout from "./../../styles/layout.module.css";
import stylesTypo from "./../../styles/typo.module.css";

const Home = () => {
  return (
    <>
      <section className={stylesLayout.content}>
        <h1 className={stylesTypo.userTitel}>Waar ben je?</h1>
        <ZaalLijst />
      </section>
      <NavigatieHome />
    </>
  );
};

export default inject(`zaalStore`)(observer(Home));
