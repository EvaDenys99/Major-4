import React from "react";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu2 from "../../components/admin/OnderMenu2";
import { inject, PropTypes, observer } from "mobx-react";

const Notificaties = ({ id, notificatieStore }) => {
  // HIER WORDEN ALLE NOTIFICATIES DIE OVEREEN KOMEN OPGEHAALD
  const notificaties = notificatieStore.findAllesByAktId(id);

  return notificaties ? (
    <div>
      <BovenMenu />
      {notificaties.length > 0 ? (
        <>
          {notificaties.map(notificatie => (
            <section key={notificatie.id}>
              <p>{notificatie.tekst}</p>
              <button>📤</button>
            </section>
          ))}
        </>
      ) : (
        <div>
          <p>Maak een notificatie aan.</p>
        </div>
      )}
      <OnderMenu2 />
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
