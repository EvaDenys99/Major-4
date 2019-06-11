import React from "react";
import { withRouter } from "react-router-dom";

import stylesUI from "./../../styles/uiControls.module.css";

const BackLink = ({ history }) => {
  return (
    <a className={stylesUI.backLink} onClick={() => history.goBack()}>
      <div className={stylesUI.backPurple} />
      <p>terug naar overzicht</p>
    </a>
  );
};

export default withRouter(BackLink);
