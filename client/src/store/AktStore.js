import { decorate, observable, action } from "mobx";
import Akt from "../models/Akt";

class AktStore {
  akts = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.addAkt(1, `Akte |`, 1);
    this.addAkt(2, `Akte ||`, 1);

    this.addAkt(3, `Akte |`, 2);
    this.addAkt(4, `Akte ||`, 2);
    this.addAkt(5, `Akte |||`, 2);
  }

  // OM 1 AKT DIE OVEREEN KOMT TE VINDEN
  findByVoorstellingId = id => {
    console.log(id);
    const akt = this.akts.find(test => test.VoorstellingId == id);
    console.log(akt);
    return akt;
  };

  // OM ALLE AKTS DIE OVEREEN KOMEN TE VINDEN
  findAllesByVoorstellingId = id => {
    console.log(id);
    const akten = this.akts.filter(test => test.VoorstellingId == id);
    console.log(akten);
    return akten;
  };

  addAkt = (id, naam, VoorstellingId) => {
    this.akts.push(new Akt(id, naam, VoorstellingId));
  };

  resolveAkt = id => this.akts.find(akt => akt.id === id);
}

decorate(AktStore, {
  akts: observable,
  addAkt: action
});

export default AktStore;
