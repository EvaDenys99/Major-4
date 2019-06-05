import React from "react";
import { withRouter } from "react-router-dom";

const BackLink = ({ history }) => {
  return <a onClick={() => history.goBack()}>{` `}˂ terug naar overzicht</a>;
};

export default withRouter(BackLink);
