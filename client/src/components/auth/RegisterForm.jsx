import React, { Component } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";

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
          <form onSubmit={this.handleSubmit}>
            <div>
              <h2>Register</h2>
              <div>
                <label htmlFor="email">Name</label>
                <input
                  type="test"
                  name="name"
                  id="name="
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email="
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="username">Password</label>
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  value={pwd}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="username">Repeat password</label>
                <input
                  type="password"
                  name="pwd2"
                  id="pwd2"
                  ref={pwd2}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Register"
              disabled={pwd && pwd !== pwd2}
            />
          </form>
        </div>
      </>
    );
  }
}

export default inject(`uiStore`)(withRouter(RegisterForm));
