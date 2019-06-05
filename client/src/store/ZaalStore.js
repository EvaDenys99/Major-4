import Zaal from "../models/Zaal";

import antwerpen from "../assets/user/antwerpen.png";
import gent from "../assets/user/gent.png";
import eilandje from "../assets/user/eilandje.png";

class ZaalStore {
  zalen = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.addZaal(1, `Antwerpen`, 1, antwerpen);
    this.addZaal(2, `Gent`, 2, gent);
    this.addZaal(3, `'t Eilandje`, 3, eilandje);
  }

  addZaal = (id, naam, voorstellingId, img) => {
    this.zalen.push(new Zaal(id, naam, voorstellingId, img));
  };
}

export default ZaalStore;
