import { decorate, observable } from "mobx";

import Zaal from "../models/Zaal";

import antwerpen from "../assets/user/antwerpen.png";
import gent from "../assets/user/gent.png";
import eilandje from "../assets/user/eilandje.png";

class ZaalStore {
  hoofdZalen = [];
  bijZalen = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.addHoofdZaal(1, `Gent`, 1, gent);
    this.addHoofdZaal(2, `Antwerpen`, 2, antwerpen);
    this.addHoofdZaal(3, `'t Eilandje`, 3, eilandje);
    this.addBijZaal(4, `AMUZ`, 3, ``);
    this.addBijZaal(5, `De Bijloke`, 3, ``);
    this.addBijZaal(6, `Geuzenhuis`, 3, ``);
    this.addBijZaal(7, `St-Pieterskerk`, 3, ``);
    this.addBijZaal(8, `St-Pauluskerk`, 3, ``);
    this.addBijZaal(9, `Vooruit`, 3, ``);
    this.addBijZaal(10, `Cinema Zuid`, 3, ``);
    this.addBijZaal(11, `De Singel`, 3, ``);
    this.addBijZaal(12, `K. Elizabethzaal`, 3, ``);
    this.addBijZaal(13, `St-Carolus`, 3, ``);
    this.addBijZaal(14, `Schouwburg A.`, 3, ``);
    this.addBijZaal(15, `Zebrastraat`, 3, ``);
  }

  addHoofdZaal = (id, naam, voorstellingId, img) => {
    this.hoofdZalen.push(new Zaal(id, naam, voorstellingId, img));
  };

  addBijZaal = (id, naam, voorstellingId, img) => {
    this.bijZalen.push(new Zaal(id, naam, voorstellingId, img));
  };
}

decorate(ZaalStore, {
  hoofdZalen: observable,
  bijZalen: observable
});

export default ZaalStore;
