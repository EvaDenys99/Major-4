import { decorate, observable, action, computed } from "mobx";
class Notificatie {
  constructor(id, tekst, AktId, store) {
    this.id = id;
    this.tekst = tekst;
    this.AktId = AktId;
    this.store = store;
  }

  setId = id => (this.id = id);
  setTekst = value => (this.tekst = value);
  setAktId = value => (this.AktId = value);

  get akt() {
    return this.store.aktStore.resolveAkt(this.AktId);
  }

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
  setAktId: action,
  akt: computed
});

export default Notificatie;
