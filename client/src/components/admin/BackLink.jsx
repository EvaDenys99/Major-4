import React from "react";
import { withRouter } from "react-router-dom";

import Arrow from "../../assets/admin/arrowBack.png";

const BackLink = ({ history }) => {
  return (
    <a onClick={() => history.goBack()}>
      {` `} <img src={Arrow} alt="" /> terug naar overzicht
    </a>
  );
};

export default withRouter(BackLink);
