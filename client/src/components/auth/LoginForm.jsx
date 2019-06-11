import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";

import stylesForm from "./../../styles/form.module.css";
import stylesUI from "./../../styles/uiControls.module.css";
import stylesTypo from "./../../styles/typo.module.css";

const LoginForm = ({ uiStore, history }) => {
  const emailInput = React.createRef();
  const pwdInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    uiStore.login(emailInput.current.value, pwdInput.current.value).then(() => {
      history.push(ROUTES.homeAdmin);
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className={stylesForm.form}>
          <div>
            <h2 className={stylesTypo.adminTitel}>Inloggen</h2>
            <div>
              <label htmlFor="email" className={stylesTypo.adminKleineTitel}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailInput}
                className={stylesForm.formInput}
                required
              />
            </div>
            <div>
              <label htmlFor="username" className={stylesTypo.adminKleineTitel}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                ref={pwdInput}
                className={stylesForm.formInput}
                required
              />
            </div>
            <p className={stylesTypo.adminParagraphs}>
              No account? <Link to={ROUTES.register}>Sign up!</Link>
            </p>
          </div>
          <input type="submit" value="Login" className={stylesForm.button} />
        </form>
      </div>
    </>
  );
};

export default inject(`uiStore`)(withRouter(LoginForm));
