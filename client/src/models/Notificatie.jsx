import { decorate, observable, action } from "mobx";
import uuid from "uuid";
class Notificatie {
  constructor(tekst, AktId, AktVoorstellingZaal) {
    this.id = uuid.v4();
    this.tekst = tekst;
    this.AktId = AktId;
    this.AktVoorstellingZaal = AktVoorstellingZaal;
  }

  setId = value => (this.id = value);
  setTekst = value => (this.tekst = value);
  setAktId = value => (this.AktId = value);
  setAktVoorstellingZaal = value => (this.AktVoorstellingZaal = value);

  // updateFromServer = (id, tekst, AktId) => {
  //   if (id._id) this.setId(id._id);
  //   this.setTekst((this.tekst = tekst));
  //   this.setAktId((this.AktId = AktId));
  // };

  updateFromServer = values => {
    if (values._id) this.setId(values._id);
    this.setTekst(values.tekst);
    this.setAktId(values.AktId);
    this.setAktVoorstellingZaal(values.AktVoorstellingZaal);
  };

  get values() {
    return {
      tekst: this.tekst,
      AktId: this.AktId,
      AktVoorstellingZaal: this.AktVoorstellingZaal
    };
  }
}

decorate(Notificatie, {
  id: observable,
  AktId: observable,
  tekst: observable,
  AktVoorstellingZaal: observable,
  setId: action,
  setTekst: action,
  setAktId: action,
  setAktVoorstellingZaal: action
});

export default Notificatie;
