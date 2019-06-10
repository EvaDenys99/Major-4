import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";

import stylesForm from "./../../styles/form.module.css";
import stylesUI from "./../../styles/uiControls.module.css";

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
            <h2>Login</h2>
            <div>
              <label htmlFor="email">Email</label>
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
              <label htmlFor="username">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={pwdInput}
                className={stylesForm.formInput}
                required
              />
            </div>
            <p>
              No account? <Link to={ROUTES.register}>Sign up!</Link>
            </p>
          </div>
          <input type="submit" value="Login" className={stylesUI.button} />
        </form>
      </div>
    </>
  );
};

export default inject(`uiStore`)(withRouter(LoginForm));
