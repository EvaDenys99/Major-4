import React from "react";
import { inject, observer } from "mobx-react";

import NavigatieHome from "../../components/user/NavigatieHome";
import ZaalLijst from "../../components/user/ZaalLijst";

import stylesLayout from "./../../styles/layout.module.css";
import stylesTypo from "./../../styles/typo.module.css";

const Home = () => {
  return (
    <>
      <div className={stylesLayout.layout}>
        <section className={stylesLayout.content}>
          <h1 className={stylesTypo.userTitel}>Waar ben je?</h1>
          <ZaalLijst />
        </section>
        <NavigatieHome />
      </div>
    </>
  );
};

export default observer(Home);
