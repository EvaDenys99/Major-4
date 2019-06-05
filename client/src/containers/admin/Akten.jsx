import React from "react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu from "../../components/admin/OnderMenu";
import { inject, PropTypes, observer } from "mobx-react";

const Akten = ({ id, aktStore }) => {
  const akt = aktStore.findByVoorstellingId(id);

  console.log(id);

  return akt ? (
    <div>
      <BovenMenu />
      <section>
        <h2>{akt.VoorstellingTitel}</h2>
        <p>{akt.naam} </p>
      </section>
    </div>
  ) : (
    <div>
      <BovenMenu />
      <p>Loading akts</p>
    </div>
  );

  //   return (
  //     <div>
  //       <BovenMenu />
  //       <section>
  //         <p>{akt.naam} </p>
  //       </section>
  //     </div>
  //   );
};

Akten.propTypes = {
  aktStore: PropTypes.observableObject.isRequired
};

export default inject(`aktStore`)(observer(Akten));
