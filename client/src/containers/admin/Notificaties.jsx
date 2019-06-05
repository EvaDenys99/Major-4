import React from "react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu2 from "../../components/admin/OnderMenu2";
import { inject, PropTypes, observer } from "mobx-react";
import { Link } from "react-router-dom";

const Notificaties = ({ id, notificatieStore }) => {
  const notificatie = notificatieStore.findByAktId(id);
  console.log(id);

  return notificatie ? (
    <div>
      <BovenMenu />
      <section>
        <p>{notificatie.tekst}</p>
        <button>📤</button>
      </section>
      <OnderMenu2 />
    </div>
  ) : (
    <div>
      <BovenMenu />
      <p>Loading Notificaties</p>
      <OnderMenu2 />
    </div>
  );
};

Notificaties.propTypes = {
  notificatieStore: PropTypes.observableObject.isRequired
};

export default inject(`notificatieStore`)(observer(Notificaties));
