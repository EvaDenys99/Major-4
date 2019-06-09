import React from "react";
import { PropTypes, inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import cogoToast from "cogo-toast";
import styles from "./../../styles/form.module.css";

const AddNotificatie = ({ notificatieStore, history, id, zaal }) => {
  console.log(zaal);
  const tekstRef = React.createRef();
  const AktRef = React.createRef();
  const ZaalRef = React.createRef();

  const handleSubmitForm = e => {
    e.preventDefault();
    if (tekstRef.current.value) {
      notificatieStore
        .addNotificatie({
          tekst: tekstRef.current.value,
          AktId: AktRef.current.value,
          AktVoorstellingZaal: ZaalRef.current.value
        })
        .then(() => {
          history.goBack();
        });

      cogoToast.success(`Notificatie is toegevoegd`, {
        position: `top-center`
      });

      tekstRef.current.value = ``;
      AktRef.current.value = ``;
      ZaalRef.current.value = ``;
    } else {
      cogoToast.error(`Er liep iets mis bij het toevoegen`, {
        position: `top-center`
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm} className={styles.form}>
        <div>
          <div>
            <label htmlFor="tekst">Beschrijving</label>
            <input
              name="tekst"
              placeholder="Kijk nu naar de man in het zwart."
              defaultValue=""
              type="text"
              ref={tekstRef}
              required
              className={styles.formInput}
            />
            <input
              type="hidden"
              placeholder={id}
              defaultValue={id}
              ref={AktRef}
            />
            <input
              type="hidden"
              placeholder={zaal}
              defaultValue={zaal}
              ref={ZaalRef}
            />
          </div>
        </div>
        <input type="submit" value="Voeg toe" />
      </form>
    </div>
  );
};

AddNotificatie.propTypes = {
  notificatieStore: PropTypes.observableObject.isRequired
};

export default inject(`notificatieStore`)(withRouter(AddNotificatie));
