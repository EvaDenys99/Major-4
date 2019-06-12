import { decorate, observable } from "mobx";

import Zaal from "../models/Zaal";

import antwerpen from "../assets/user/antwerpen.png";
import gent from "../assets/user/gent.png";
import eilandje from "../assets/user/eilandje.png";

import amuzEmpty from "./../assets/user/empty/amuz.png";
import bijlokeEmpty from "./../assets/user/empty/bijloke.png";
import carolusEmpty from "./../assets/user/empty/carolus.png";
import cinemaZuidEmpty from "./../assets/user/empty/cinemazuid.png";
import eilandjeEmpty from "./../assets/user/empty/eiland.png";
import elisabethEmpty from "./../assets/user/empty/elisabeth.png";
import geuzenhuisEmpty from "./../assets/user/empty/geuzenhuis.png";
import pauluskerkEmpty from "./../assets/user/empty/pauluskerk.png";
import pieterskerkEmpty from "./../assets/user/empty/pieterskerk.png";
import schouwburgEmpty from "./../assets/user/empty/schouwburg.png";
import singelEmpty from "./../assets/user/empty/singel.png";
import vooruitEmpty from "./../assets/user/empty/vooruit.png";
import zebrastraatEmpty from "./../assets/user/empty/zebrastraat.png";

class ZaalStore {
  hoofdZalen = [];
  bijZalen = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.addHoofdZaal(1, `Gent`, 1, gent, ``);
    this.addHoofdZaal(2, `Antwerpen`, 2, antwerpen, ``);
    this.addHoofdZaal(3, `'t Eilandje`, 3, eilandje, eilandjeEmpty);
    this.addBijZaal(4, `AMUZ`, 3, ``, amuzEmpty);
    this.addBijZaal(5, `De Bijloke`, 3, ``, bijlokeEmpty);
    this.addBijZaal(6, `Geuzenhuis`, 3, ``, geuzenhuisEmpty);
    this.addBijZaal(7, `St-Pieterskerk`, 3, ``, pieterskerkEmpty);
    this.addBijZaal(8, `St-Pauluskerk`, 3, ``, pauluskerkEmpty);
    this.addBijZaal(9, `Vooruit`, 3, ``, vooruitEmpty);
    this.addBijZaal(10, `Cinema Zuid`, 3, ``, cinemaZuidEmpty);
    this.addBijZaal(11, `De Singel`, 3, ``, singelEmpty);
    this.addBijZaal(12, `K. Elizabethzaal`, 3, ``, elisabethEmpty);
    this.addBijZaal(13, `St-Carolus`, 3, ``, carolusEmpty);
    this.addBijZaal(14, `Schouwburg A.`, 3, ``, schouwburgEmpty);
    this.addBijZaal(15, `Zebrastraat`, 3, ``, zebrastraatEmpty);
  }

  addHoofdZaal = (id, naam, voorstellingId, img, imgEmpty) => {
    this.hoofdZalen.push(new Zaal(id, naam, voorstellingId, img, imgEmpty));
  };

  addBijZaal = (id, naam, voorstellingId, img, imgEmpty) => {
    this.bijZalen.push(new Zaal(id, naam, voorstellingId, img, imgEmpty));
  };

  findByHoofdZaalId = testId => {
    console.log(testId);
    const hoofdZaal = this.hoofdZalen.find(test => test.id == testId);
    return hoofdZaal;
  };

  findByBijZaalId = testId => {
    const bijZaal = this.bijZalen.find(test => test.id == testId);
    return bijZaal;
  };
}

decorate(ZaalStore, {
  hoofdZalen: observable,
  bijZalen: observable
});

export default ZaalStore;
