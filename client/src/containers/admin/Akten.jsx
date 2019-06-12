import React from "react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu from "../../components/admin/OnderMenu";
import { inject, PropTypes, observer } from "mobx-react";
import { Link } from "react-router-dom";

import stylesLayout from "./../../styles/layout.module.css";
import stylesUI from "./../../styles/uiControls.module.css";
import stylesTypo from "./../../styles/typo.module.css";
import styles from "./Akten.module.css";

const Akten = ({ id, aktStore, voorstellingStore }) => {
  // HIER WORDEN ALLE AKTS DIE OVEREEN KOMEN OPGEHAALD
  // om de titel op te halen van de voorstelling moeten we eerst de voorstelling ophalen die hierbij hoort
  const voorstellingTitel = voorstellingStore.findById(id);
  // console.log(voorstellingTitel);
  // om de akts op te halen
  const akten = aktStore.findAllesByVoorstellingId(id);

  return akten ? (
    <>
      <div className={stylesLayout.layoutAdmin}>
        <BovenMenu />
        <div className={stylesLayout.contentAdminContainer}>
          <section className={stylesLayout.contentAdmin}>
            <h2 className={stylesTypo.adminTitel}>{voorstellingTitel.titel}</h2>
            {akten.length > 0 ? (
              <>
                {akten.map(akt => (
                  <div key={akt.id} className={styles.listItem}>
                    <Link
                      to={`/notificatie/${akt.id}/${akt.VoorstellingZaal}`}
                      className={styles.item}
                    >
                      <p>{akt.naam}</p>
                      <span className={stylesUI.rightArrow}></span>
                    </Link>
                  </div>
                ))}
              </>
            ) : (
              <div>
                <p className={styles.emptyState}>Geen akts ter beschikking</p>
              </div>
            )}
          </section>
        </div>
        <OnderMenu />
      </div>
    </>
  ) : (
    <div className={stylesLayout.layoutAdmin}>
      <BovenMenu />
      <h2>{voorstellingTitel.titel}</h2>
      <p>Loading akts</p>
      <BovenMenu />
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
