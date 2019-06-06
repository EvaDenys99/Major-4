import React from "react";
import { ROUTES } from "../../constants";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

const BovenMenu = ({ uiStore, history }) => {
  const handleSubmit = e => {
    e.preventDefault();
    uiStore.logout().then(() => {
      history.push(ROUTES.login);
    });
  };

  return (
    <>
      <nav>
        <div>
          <h1>PushLines</h1>
          {uiStore.authUser ? (
            <ul>
              <li>
                <button onClick={handleSubmit}>Logout</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <p />
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default inject(`uiStore`)(withRouter(observer(BovenMenu)));
