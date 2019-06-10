import React from "react";

import VertaalForm from "./../../components/user/VertaalForm";

import NavigatieVertaling from "../../components/user/NavigatieVertaling";

import stylesLayout from "./../../styles/layout.module.css";
import stylesTypo from "./../../styles/typo.module.css";

const Vertaal = () => {
  return (
    <>
      <div className={stylesLayout.layout}>
        <section className={stylesLayout.content}>
          <h1 className={stylesTypo.userTitel}>Vertaal je zin</h1>
          <VertaalForm />
        </section>
        <NavigatieVertaling />
      </div>
    </>
  );
};

export default Vertaal;
