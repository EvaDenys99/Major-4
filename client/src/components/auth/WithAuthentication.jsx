// withAuthentication.jsx
import React from "react";
import { Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../../constants";

const withAuthentication = ComponentToProtect => {
  const WithAuth = props => {
    if (!props.uiStore.authUser) {
      return <Redirect to={ROUTES.login} />;
    }
    return <ComponentToProtect {...props} authUser={props.uiStore.authUser} />;
  };

  return inject(`uiStore`)(observer(WithAuth));
};
export default withAuthentication;
