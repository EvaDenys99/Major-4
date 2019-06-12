import React from "react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu2 from "../../components/admin/OnderMenu2";
import { observer } from "mobx-react";

import NotificatiesLijst from "../../components/admin/NotificatiesLijst";

import stylesLayout from "./../../styles/layout.module.css";

const Notificaties = ({ id, zaal }) => {
  return (
    <>
      <div className={stylesLayout.layoutAdmin}>
        <BovenMenu />
        <NotificatiesLijst id={id} zaal={zaal}  />
        <OnderMenu2 id={id} zaal={zaal} adding={false} />
      </div>
    </>
  );
};

export default observer(Notificaties);
