import { decorate, observable, action } from "mobx";
import Notificatie from "../models/Notificatie";

class NotificatieStore {
  notificaties = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  findByAktId = id => {
    console.log(id);
    const notificatie = this.notificaties.find(test => test.AktId == id);
    return notificatie;
  };

  addNotificatie = (id, tekst, AktId) => {
    this.notificaties.push(new Notificatie(id, tekst, AktId));
  };
}

decorate(NotificatieStore, {
  notificaties: observable,
  addNotificatie: action
});

export default NotificatieStore;
