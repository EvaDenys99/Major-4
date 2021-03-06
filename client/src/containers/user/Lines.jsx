import React from "react";
import LinesLijst from "../../components/user/LinesLijst";
import NavigatieLines from "./../../components/user/NavigatieLines";

import stylesLayout from "./../../styles/layout.module.css";
import stylesTypo from "./../../styles/typo.module.css";

const Lines = () => {
  return (
    <>
      <div className={stylesLayout.layout}>
        <section className={stylesLayout.content}>
          <h1 className={stylesTypo.userTitel}>Pushlines</h1>
          <p className={stylesTypo.userParagraphs}>
            Bekijk hier de vorige pushlines
          </p>
          <LinesLijst />
        </section>
        <NavigatieLines />
      </div>
    </>
  );
};

export default Lines;
