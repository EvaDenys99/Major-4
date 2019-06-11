import React from "react";
import { inject, observer } from "mobx-react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu2 from "../../components/admin/OnderMenu2";
import AddNotificatie from "../../components/admin/AddNotificatie";
import BackLink from "../../components/admin/BackLink";

import stylesLayout from "./../../styles/layout.module.css";
import stylesTypo from "./../../styles/typo.module.css";

const Add = ({ id, zaal }) => {
  console.log(id);
  return (
    <>
      <div className={stylesLayout.layoutAdmin}>
        <BovenMenu />
        <div className={stylesLayout.contentAdminContainer}>
          <section className={stylesLayout.contentAdmin}>
            <BackLink />
            <h2 className={stylesTypo.adminTitel}>Melding toevoegen</h2>
            <AddNotificatie id={id} zaal={zaal} />
          </section>
        </div>
        <OnderMenu2 adding="true" />
      </div>
    </>
  );
};

export default observer(Add);
