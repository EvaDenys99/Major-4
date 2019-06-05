import { decorate, observable, action } from "mobx";
import Voorstelling from "../models/Voorstelling";

import bach from "../assets/admin/bach.png";
import demons from "../assets/admin/demons.png";
import macbeth from "../assets/admin/macbeth.png";

import bachUser from "../assets/user/bach.png";
import demonsUser from "../assets/user/demons.png";
import macbethUser from "../assets/user/macbeth.png";

class VoorstellingStore {
  voorstellingen = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.addVoorstelling(
      1,
      `BACH STUDIOS`,
      `testestestest`,
      `2u`,
      `1xpauze`,
      bachUser,
      bach,
      `gent`
    );

    this.addVoorstelling(
      2,
      `MIDDAGCONCERT: DEMONS, WITCHES AND MADNESS`,
      `testestestest`,
      `2u`,
      `1xpauze`,
      demonsUser,
      demons,
      `gent`
    );

    this.addVoorstelling(
      3,
      `MACBETH`,
      `testestestest`,
      `2u`,
      `1xpauze`,
      macbethUser,
      macbeth,
      `gent`
    );
  }

  addVoorstelling = (
    id,
    titel,
    discription,
    duur,
    pauze,
    imageUser,
    imageAdmin,
    plaats
  ) => {
    this.voorstellingen.push(
      new Voorstelling(
        id,
        titel,
        discription,
        duur,
        pauze,
        imageUser,
        imageAdmin,
        plaats
      )
    );
  };

  // resolveVoorstelling = id => this.voorstellingen.find(test => test.id === id);
}

decorate(VoorstellingStore, {
  voorstellingen: observable,
  addVoorstelling: action
});

export default VoorstellingStore;
