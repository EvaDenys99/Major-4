import React from "react";
import { ROUTES } from "../../constants";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "./../../assets/admin/logo.png";

import styles from "./BovenMenu.module.css";

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
        <div className={styles.header}>
          <Link to={ROUTES.homeAdmin} className={styles.logoContainer}>
            <img src={logo} alt="" width="77" height="70" />
            <h1 className={styles.logoName}>PushLines</h1>
          </Link>

          {uiStore.authUser ? (
            <ul>
              <li>
                <input
                  type="submit"
                  onClick={handleSubmit}
                  value="Logout"
                  className={styles.logout}
                />
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
