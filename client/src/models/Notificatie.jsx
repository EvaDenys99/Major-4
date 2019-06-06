import { decorate, observable, action, computed } from "mobx";
import uuid from "uuid";
class Notificatie {
  constructor(tekst, AktId) {
    this.id = uuid.v4();
    this.tekst = tekst;
    this.AktId = AktId;
  }

  setId = value => (this.id = value);
  setTekst = value => (this.tekst = value);
  setAktId = value => (this.AktId = value);

  // get akt() {
  //   return this.store.aktStore.resolveAkt(this.AktId);
  // }

  // updateFromServer = (id, tekst, AktId) => {
  //   if (id._id) this.setId(id._id);
  //   this.setTekst((this.tekst = tekst));
  //   this.setAktId((this.AktId = AktId));
  // };

  updateFromServer = values => {
    if (values._id) this.setId(values._id);
    this.setTekst(values.tekst);
    this.setAktId(values.AktId);
  };

  get values() {
    return {
      tekst: this.tekst,
      AktId: this.AktId
    };
  }
}

decorate(Notificatie, {
  id: observable,
  AktId: observable,
  tekst: observable,
  setId: action,
  setTekst: action,
  setAktId: action
  // akt: computed
});

export default Notificatie;
