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

  // OM 1 NOTIFICATIE DIE OVEREEN KOMT TE VINDEN
  findByAktId = id => {
    const notificatie = this.notificaties.find(test => test.AktId == id);
    if (!notificatie) {
      this.api.getById(id);
    }
    return notificatie;
  };

  // OM ALLE NOTIFICATIES DIE OVEREEN KOMEN TE VINDEN
  findAllesByAktId = id => {
    const notificaties2 = this.notificaties.filter(test => test.AktId == id);
    return notificaties2;
  };

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addNotificatie));
  };

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
    const notificatie = new Notificatie();
    notificatie.updateFromServer(values);
    runInAction(() => this.notificaties.push(notificatie));
  };

  deleteNotificatie = notificatie => {
    this.notificaties.remove(notificatie);
    this.api.delete(notificatie);
  };
}

decorate(NotificatieStore, {
  notificaties: observable,
  addNotificatie: action,
  deleteNotificatie: action
});

export default NotificatieStore;
