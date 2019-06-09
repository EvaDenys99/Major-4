import { decorate, observable, action } from "mobx";
import Akt from "../models/Akt";

class AktStore {
  akts = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.addAkt(1, `Akte |`, 1, `antwerpen`);
    this.addAkt(2, `Akte ||`, 1, `antwerpen`);

    this.addAkt(3, `Akte |`, 2, `antwerpen`);
    this.addAkt(4, `Akte ||`, 2, `antwerpen`);
    this.addAkt(5, `Akte |||`, 2, `antwerpen`);

    this.addAkt(6, `Akte |`, 3, `antwerpen`);
    this.addAkt(7, `Akte ||`, 3, `antwerpen`);
    this.addAkt(8, `Akte |||`, 3, `antwerpen`);
    this.addAkt(9, `Akte ||||`, 3, `antwerpen`);

    this.addAkt(10, `Akte |`, 4, `antwerpen`);
    this.addAkt(11, `Akte ||`, 4, `antwerpen`);

    this.addAkt(12, `Akte |`, 5, `gent`);
    this.addAkt(13, `Akte ||`, 5, `gent`);

    this.addAkt(14, `Akte |`, 6, `gent`);
    this.addAkt(15, `Akte ||`, 6, `gent`);
    this.addAkt(16, `Akte |||`, 6, `gent`);

    this.addAkt(17, `Akte |`, 7, `gent`);
    this.addAkt(18, `Akte ||`, 7, `gent`);
    this.addAkt(19, `Akte |||`, 7, `gent`);
    this.addAkt(20, `Akte ||||`, 7, `gent`);

    this.addAkt(21, `Akte |`, 8, `gent`);
    this.addAkt(22, `Akte ||`, 8, `gent`);
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

  addAkt = (id, naam, VoorstellingId, VoorstellingZaal) => {
    this.akts.push(new Akt(id, naam, VoorstellingId, VoorstellingZaal));
  };

  resolveAkt = id => this.akts.find(akt => akt.id === id);
}

decorate(AktStore, {
  akts: observable,
  addAkt: action
});

export default AktStore;
