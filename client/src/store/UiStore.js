import { decorate, observable, action } from "mobx";
import Auth from "../api/auth";
import { getUserFromCookie } from "../utils/index.js";

class UiStore {
  authUser = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.authService = new Auth();
    this.setUser(getUserFromCookie());
  }

  setUser = value => (this.authUser = value);

  login = (username, password) => {
    return this.authService
      .login(username, password)
      .then(() => {
        this.setUser(getUserFromCookie());
        Promise.resolve();
      })
      .catch(() => {
        this.setUser(null);
        Promise.reject();
      });
  };

  register = (name, email, pwd) => this.authService.register(name, email, pwd);

  logout = () => {
    return this.authService.logout().then(() => {
      this.setUser(null);
      Promise.resolve();
    });
  };
}

decorate(UiStore, { authUser: observable, setUser: action });

export default UiStore;
