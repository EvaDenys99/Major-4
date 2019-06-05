import React from "react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu from "../../components/admin/OnderMenu";
import { inject, PropTypes, observer } from "mobx-react";
import { Link } from "react-router-dom";

const Akten = ({ id, aktStore }) => {
  const akt = aktStore.findByVoorstellingId(id);

  console.log(id);

  return akt ? (
    <div>
      <BovenMenu />
      <section>
        <h2>{akt.VoorstellingTitel}</h2>
        <Link to={`/notificatie/${akt.id}`}>
          <p>{akt.naam} </p>
        </Link>
      </section>
    </div>
  ) : (
    <div>
      <BovenMenu />
      <p>Loading akts</p>
    </div>
  );
};

Akten.propTypes = {
  aktStore: PropTypes.observableObject.isRequired
};

export default inject(`aktStore`)(observer(Akten));
