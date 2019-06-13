import React from "react";
import { inject, PropTypes, observer } from "mobx-react";
import cogoToast from "cogo-toast";

import Verzend from "../../assets/admin/send.png";

import stylesLayout from "./../../styles/layout.module.css";
import styles from "./NotificatiesLijst.module.css";
// SOCKET.IO DEFINIEREN
const socket = require(`socket.io-client`)(
  `https://pushlines-obv.herokuapp.com`
);

const NotificatiesLijst = ({ id, notificatieStore, zaal }) => {
  // HIER WORDEN ALLE NOTIFICATIES DIE OVEREEN KOMEN OPGEHAALD
  const notificaties = notificatieStore.findAllesByAktId(id);
  console.log(notificaties);
  //
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.currentTarget.value);
    socket.emit(`chat message`, e.currentTarget.value);
    cogoToast.success(`Notificatie is verzonden`, {
      position: `top-center`
    });

    return false;
  };

  return notificaties ? (
    <div className={stylesLayout.contentAdminContainer}>
      <section className={stylesLayout.contentAdmin}>
        {notificaties.length > 0 ? (
          <>
            {notificaties.map(notificatie => (
              <form key={notificatie.id} className={styles.container}>
                <input
                  type="submit"
                  onClick={() =>
                    notificatieStore.deleteNotificatie(notificatie)
                  }
                  className={styles.deleteButton}
                  value="X"
                />
                <p className={styles.listItem}>
                  <span>{notificatie.tekst}</span>
                </p>
                <button
                  value={notificatie.tekst}
                  onClick={handleSubmit}
                  className={styles.sendButton}
                >
                  <img src={Verzend} alt="" width="45" height="45" />
                </button>
              </form>
            ))}
          </>
        ) : (
          <div>
            <p className={styles.emptyState}>Maak een notificatie aan.</p>
          </div>
        )}
      </section>
    </div>
  ) : (
    <div className={stylesLayout.contentAdminContainer}>
      <p>Loading Notificaties</p>
    </div>
  );

  //HIER WERD ENKEL HET EERSTE OPGEHAALT
  // const notificatie = notificatieStore.findByAktId(id);
  // console.log(id);

  // return notificatie ? (
  //   <div>
  //     <BovenMenu />
  //     <section>
  //       <p>{notificatie.tekst}</p>
  //       <button>📤</button>
  //     </section>
  //     <OnderMenu2 />
  //   </div>
  // ) : (
  //   <div>
  //     <BovenMenu />
  //     <p>Loading Notificaties</p>
  //     <OnderMenu2 />
  //   </div>
  // );
};

NotificatiesLijst.propTypes = {
  notificatieStore: PropTypes.observableObject.isRequired
};

export default inject(`notificatieStore`)(observer(NotificatiesLijst));
