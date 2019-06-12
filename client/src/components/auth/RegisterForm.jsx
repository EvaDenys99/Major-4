import React, { Component } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";

import stylesTypo from "./../../styles/typo.module.css";
import stylesForm from "./../../styles/form.module.css";
import { styles } from "ansi-colors";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = { email: ``, pwd: ``, pwd2: ``, name: `` };
  }

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };
    state[input.name] = input.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { uiStore, history } = this.props;
    const { email, pwd, name } = this.state;
    uiStore.register(name, email, pwd).then(() => {
      history.push(ROUTES.login);
    });
  };

  render() {
    const { email, pwd, pwd2, name } = this.state;
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit} className={stylesForm.form}>
            <div>
              <h2 className={stylesTypo.adminTitel}>Registeren</h2>
              <div>
                <label htmlFor="email" className={stylesTypo.adminKleineTitel}>
                  Name
                </label>
                <input
                  type="test"
                  name="name"
                  id="name="
                  value={name}
                  onChange={this.handleChange}
                  className={stylesForm.formInput}
                />
              </div>
              <div>
                <label htmlFor="email" className={stylesTypo.adminKleineTitel}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email="
                  value={email}
                  onChange={this.handleChange}
                  className={stylesForm.formInput}
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className={stylesTypo.adminKleineTitel}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  value={pwd}
                  onChange={this.handleChange}
                  className={stylesForm.formInput}
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className={stylesTypo.adminKleineTitel}
                >
                  Repeat password
                </label>
                <input
                  type="password"
                  name="pwd2"
                  id="pwd2"
                  ref={pwd2}
                  onChange={this.handleChange}
                  className={stylesForm.formInput}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Register"
              disabled={pwd && pwd !== pwd2}
              className={stylesForm.button}
            />
          </form>
        </div>
      </>
    );
  }
}

export default inject(`uiStore`)(withRouter(RegisterForm));
