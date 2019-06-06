import React from "react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu from "../../components/admin/OnderMenu";
import { inject, PropTypes, observer } from "mobx-react";
import { Link } from "react-router-dom";
import AddNotificatie from "../../components/admin/AddNotificatie";

const Akten = ({ id, aktStore, voorstellingStore }) => {
  // HIER WORDEN ALLE AKTS DIE OVEREEN KOMEN OPGEHAALD
  // om de titel op te halen van de voorstelling moeten we eerst de voorstelling ophalen die hierbij hoort
  const voorstellingTitel = voorstellingStore.findById(id);
  console.log(voorstellingTitel);
  // om de akts op te halen
  const akten = aktStore.findAllesByVoorstellingId(id);

  return akten ? (
    <>
      <div>
        <BovenMenu />
        <section>
          <h2>{voorstellingTitel.titel}</h2>
          {akten.length > 0 ? (
            <>
              {akten.map(akt => (
                <div key={akt.id}>
                  <Link to={`/notificatie/${akt.id}`}>
                    <p>{akt.naam} ></p>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <div>
              <p>Geen akts ter beschikking</p>
            </div>
          )}
        </section>
      </div>
    </>
  ) : (
    <div>
      <BovenMenu />
      <h2>{voorstellingTitel.titel}</h2>
      <p>Loading akts</p>
    </div>
  );

  //HIER WERD ENKEL HET EERSTE OPGEHAALT
  // const akt = aktStore.findByVoorstellingId(id);
  // console.log(akt);

  // return akt ? (
  //   <div>
  //     <BovenMenu />
  //     <section>
  //       <h2>{akt.VoorstellingTitel}</h2>
  //       <Link to={`/notificatie/${akt.id}`}>
  //         <p>{akt.naam} </p>
  //       </Link>
  //     </section>
  //   </div>
  // ) : (
  //   <div>
  //     <BovenMenu />
  //     <p>Loading akts</p>
  //   </div>
  // );
};

Akten.propTypes = {
  aktStore: PropTypes.observableObject.isRequired,
  voorstellingStore: PropTypes.observableObject.isRequired
};

export default inject(`aktStore`, `voorstellingStore`)(observer(Akten));
