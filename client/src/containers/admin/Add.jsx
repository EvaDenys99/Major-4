import React from "react";
import { inject, observer } from "mobx-react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu2 from "../../components/admin/OnderMenu2";
import AddNotificatie from "../../components/admin/AddNotificatie";
import BackLink from "../../components/admin/BackLink";

const Add = ({ id, zaal }) => {
  console.log(id);
  return (
    <>
      <div>
        <BovenMenu />
        <section>
          <BackLink />
          <h2>Melding toevoegen</h2>
          <AddNotificatie id={id} zaal={zaal} />
        </section>
        <OnderMenu2 adding="true" />
      </div>
    </>
  );
};

export default observer(Add);
