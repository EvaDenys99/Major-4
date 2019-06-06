import React from "react";
import { PropTypes, inject } from "mobx-react";
import { withRouter } from "react-router-dom";

import { ROUTES } from "../../constants";

const AddNotificatie = ({ notificatieStore, history, id }) => {
  console.log(id);
  const tekstRef = React.createRef();
  const AktRef = React.createRef();

  const handleSubmitForm = e => {
    e.preventDefault();
    if (tekstRef.current.value) {
      notificatieStore
        .addNotificatie({
          tekst: tekstRef.current.value,
          AktId: AktRef.current.value
        })
        .then(() => {
          history.goBack();
        });

      tekstRef.current.value = ``;
      AktRef.current.value = ``;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
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
            />
            <input
              type="number"
              placeholder={id}
              defaultValue={id}
              ref={AktRef}
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
