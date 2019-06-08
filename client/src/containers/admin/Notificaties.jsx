import React from "react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu2 from "../../components/admin/OnderMenu2";
import { inject, PropTypes, observer } from "mobx-react";

import Verzend from "../../assets/admin/send.png";

const io = require(`socket.io-client`);

const Notificaties = ({ id, notificatieStore }) => {
  // SOCKET.IO DEFINIEREN
  const socket = io.connect(`http://localhost:3000`);
  // HIER WORDEN ALLE NOTIFICATIES DIE OVEREEN KOMEN OPGEHAALD
  const notificaties = notificatieStore.findAllesByAktId(id);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    socket.emit(`chat message`, e.currentTarget.value);
    return false;
  };

  return notificaties ? (
    <div>
      <BovenMenu />
      <section>
        {notificaties.length > 0 ? (
          <>
            {notificaties.map(notificatie => (
              <form key={notificatie.id}>
                {/* <input
                  name="tekst"
                  placeholder="Kijk nu naar de man in het zwart."
                  defaultValue={notificatie.tekst}
                  type="text"
                  required
                /> */}
                <label>{notificatie.tekst}</label>
                <button value={notificatie.tekst} onClick={handleSubmit}>
                  <img src={Verzend} alt="" width="45" height="45" />
                </button>
                <button
                  onClick={() =>
                    notificatieStore.deleteNotificatie(notificatie)
                  }
                >
                  X
                </button>
              </form>
            ))}
          </>
        ) : (
          <div>
            <p>Maak een notificatie aan.</p>
          </div>
        )}
      </section>
      <OnderMenu2 id={id} adding={false} />
    </div>
  ) : (
    <div>
      <BovenMenu />
      <p>Loading Notificaties</p>
      <OnderMenu2 />
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

Notificaties.propTypes = {
  notificatieStore: PropTypes.observableObject.isRequired
};

export default inject(`notificatieStore`)(observer(Notificaties));
