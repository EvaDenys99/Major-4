import { decorate, observable, action, configure, runInAction } from "mobx";
import Notificatie from "../models/Notificatie";
import Api from "../api";

configure({ enforceActions: `observed` });

class NotificatieStore {
  notificaties = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    // this._addNotificatie(1, `hallo`, 1);
    // this._addNotificatie(2, `IK BEN KABOTER PLOP`, 1);

    // this._addNotificatie(2, `IK BEN ...`, 2);
    // this._addNotificatie(2, `IK WIL SNOEP`, 2);

    // this._addNotificatie(3, `IK BEN KABOTER KLUS`, 3);

    this.api = new Api(`notificaties`);
    this.getAll();
  }

  // OM 1 NOTIFICATIE DIE OVEREEN KOMT TE VINDEN
  findByAktId = id => {
    console.log(id);
    const notificatie = this.notificaties.find(test => test.AktId == id);
    if (!notificatie) {
      this.api.getById(id);
    }
    return notificatie;
  };

  // OM ALLE NOTIFICATIES DIE OVEREEN KOMEN TE VINDEN
  findAllesByAktId = id => {
    console.log(id);
    const notificaties2 = this.notificaties.filter(test => test.AktId == id);
    console.log(notificaties2);
    return notificaties2;
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

  _addNotificatie = (id, tekst, AktId) => {
    console.log(id, tekst, AktId);
    const notificatie = new Notificatie();
    notificatie.updateFromServer(id, tekst, AktId);
    runInAction(() => this.notificaties.push(notificatie));
    console.log(notificatie);
  };

  // _addNotificatie = (tekst, AktId) => {
  //   console.log(tekst, AktId);
  //   const notificatie = new Notificatie();
  //   notificatie.updateFromServer(tekst, AktId);
  //   runInAction(() => this.notificaties.push(notificatie));
  //   console.log(notificatie);
  // };

  // _addNotificatie = values => {
  //   console.log(values);
  //   const notificatie = new Notificatie();
  //   notificatie.updateFromServer(values);
  //   runInAction(() => this.notificaties.push(notificatie));
  //   console.log(notificatie);
  // };
}

decorate(NotificatieStore, {
  notificaties: observable,
  addNotificatie: action
});

export default NotificatieStore;
