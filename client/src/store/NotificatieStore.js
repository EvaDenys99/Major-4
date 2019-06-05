import { decorate, observable, action, configure, runInAction } from "mobx";
import Notificatie from "../models/Notificatie";
import Api from "../api";

configure({ enforceActions: `observed` });

class NotificatieStore {
  notificaties = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`notificaties`);
    this.getAll();
  }

  findByAktId = id => {
    console.log(id);
    const notificatie = this.notificaties.find(test => test.AktId === id);
    if (!notificatie) {
      this.api.getById(id);
    }
    return notificatie;
  };

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addNotificatie));
  };

  //   addNotificatie = (id, tekst, AktId) => {
  //     this.notificaties.push(new Notificatie(id, tekst, AktId));
  //   };

  addNotificatie = data => {
    const nieuweNotificatie = new Notificatie();
    nieuweNotificatie.updateFromServer(data);
    this.notificaties.push(nieuweNotificatie);
    return this.api.create(nieuweNotificatie).then(notificatieValues => {
      nieuweNotificatie.updateFromServer(notificatieValues);
      Promise.resolve();
    });
  };

  _addNotificatie = values => {
    console.log(values);
    const notificatie = new Notificatie();
    notificatie.updateFromServer(values);
    runInAction(() => this.notificaties.push(notificatie));
    console.log(notificatie);
  };
}

decorate(NotificatieStore, {
  notificaties: observable,
  addNotificatie: action
});

export default NotificatieStore;
