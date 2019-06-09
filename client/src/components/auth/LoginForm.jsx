import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./../../styles/form.module.css";

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
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <h2>Login</h2>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email="
                ref={emailInput}
                className={styles.formInput}
              />
            </div>
            <div>
              <label htmlFor="username">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={pwdInput}
                className={styles.formInput}
              />
            </div>
            <p>
              No account? <Link to={ROUTES.register}>Sign up!</Link>
            </p>
          </div>
          <input type="submit" value="Login" className={styles.button} />
        </form>
      </div>
    </>
  );
};

export default inject(`uiStore`)(withRouter(LoginForm));
