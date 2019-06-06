import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";

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
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Login</h2>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email=" ref={emailInput} />
            </div>
            <div>
              <label htmlFor="username">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={pwdInput}
              />
            </div>
            <p>
              No account? <Link to={ROUTES.register}>Sign up!</Link>
            </p>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default inject(`uiStore`)(withRouter(LoginForm));
