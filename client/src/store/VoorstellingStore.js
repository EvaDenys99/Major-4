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
      `Ballet Vlaanderen haalt met de Franse choreograaf Benjamin Millepied een van de meest gerenommeerde hedendaagse balletchoreografen voor het eerst naar België. Hij creëert voor het eerst een avondvullend werk gebaseerd op werk van Johann Sebastian Bach. Het belooft een unieke, abstracte en toch hoogst emotionele balletavond te worden, gecreëerd door een van de meest innovatieve balletchoreografen van het moment.`,
      `1u45`,
      `1x`,
      bachUser,
      bach,
      `gent`
    );

    this.addVoorstelling(
      2,
      `MACBETH`,
      `Macbeth van Shakespeare is ongetwijfeld het meest demonische werk van Giuseppe Verdi. De focus ligt op de vergankelijkheid van de macht. We zijn getuige hoe er een ketting van geweld, terreur en paranoia ontstaat waarbij Macbeth, Lady Macbeth en de heksen op een fatale en destructieve manier aan elkaar zijn overgeleverd. De Duitse regisseur Michael Thalheimer creëert daarmee, na de producties La Forza del Destino en Otello, zijn eigen Verdi-trilogie bij Opera Vlaanderen.`,
      `3u`,
      `1x15min`,
      macbethUser,
      macbeth,
      `antwerpen`
    );

    this.addVoorstelling(
      3,
      `MIDDAGCONCERT: DEMONS, WITCHES AND MADNESS`,
      `testestestest`,
      `2u`,
      `1xpauze`,
      demonsUser,
      demons,
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

  findById = testId => {
    console.log(testId);
    const voorstelling = this.voorstellingen.find(test => test.id == testId);
    return voorstelling;
  };

  // resolveVoorstelling = id => this.voorstellingen.find(test => test.id === id);
}

decorate(VoorstellingStore, {
  voorstellingen: observable,
  addVoorstelling: action
});

export default VoorstellingStore;
