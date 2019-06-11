import React from "react";

import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu from "../../components/admin/OnderMenu";
import VoorstellingLijst from "../../components/admin/VoorstellingLijst";
import withAuthentication from "../../components/auth/WithAuthentication";
import { observer } from "mobx-react";

import stylesLayout from "./../../styles/layout.module.css";
import stylesTypo from "./../../styles/typo.module.css";

const Home = () => {
  return (
    <>
      <div className={stylesLayout.layoutAdmin}>
        <BovenMenu />
        <div className={stylesLayout.contentAdminContainer}>
          <section className={stylesLayout.contentAdmin}>
            <h2 className={stylesTypo.adminTitel}>Komende voorstellingen</h2>
            <VoorstellingLijst />
          </section>
        </div>
        <OnderMenu />
      </div>
    </>
  );
};

export default withAuthentication(observer(Home));
