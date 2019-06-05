import { decorate, observable, action } from "mobx";
import Akt from "../models/Akt";

class AktStore {
  akts = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.addAkt(1, `Akte |`, 1, `BACH STUDIOS`);
    this.addAkt(2, `Akte ||`, 1, `BACH STUDIOS`);

    this.addAkt(3, `Akte |`, 2, `MIDDAGCONCERT: DEMONS, WITCHES AND MADNESS`);
    this.addAkt(4, `Akte ||`, 2, `MIDDAGCONCERT: DEMONS, WITCHES AND MADNESS`);
    this.addAkt(5, `Akte |||`, 2, `MIDDAGCONCERT: DEMONS, WITCHES AND MADNESS`);
  }

  findByVoorstellingId = id => {
    console.log(id);
    const akt = this.akts.find(test => test.VoorstellingId == id);
    return akt;
  };

  addAkt = (id, naam, VoorstellingId, VoorstellingTitel) => {
    this.akts.push(new Akt(id, naam, VoorstellingId, VoorstellingTitel));
  };

  //   resolveAkt = id => this.akts.find(akt => akt.id === id);
}

decorate(AktStore, {
  akts: observable,
  addAkt: action
});

export default AktStore;
