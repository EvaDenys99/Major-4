import React from "react";
import { inject, observer } from "mobx-react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu from "../../components/admin/OnderMenu";
import AddNotificatie from "../../components/admin/AddNotificatie";
import BackLink from "../../components/admin/BackLink";

const Add = ({ notificatieStore, id }) => {
  console.log(id);
  return (
    <>
      <div>
        <BovenMenu />
        <section>
          <BackLink />
          <h2>Melding toevoegen</h2>
          <AddNotificatie id={id} />
        </section>
        <OnderMenu />
      </div>
    </>
  );
};

export default inject(`notificatieStore`)(observer(Add));
