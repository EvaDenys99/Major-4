import { decorate, observable, action } from "mobx";
import Voorstelling from "../models/Voorstelling";

import bach from "../assets/admin/bach.png";
import demons from "../assets/admin/demons.png";
import macbeth from "../assets/admin/macbeth.png";
import afscheid from "../assets/admin/afscheid.png";
import doncarlos from "../assets/admin/doncarlos.png";
import mozart from "../assets/admin/mozart.png";
import requiem from "../assets/admin/requiem.png";

import bachUser from "../assets/user/bach.png";
import demonsUser from "../assets/user/demons.png";
import macbethUser from "../assets/user/macbeth.png";
import afscheidUser from "../assets/user/afscheidennieuwbegin.png";
import doncarlosUser from "../assets/user/doncarlos.png";
import mozartUser from "../assets/user/mozart.png";
import requiemUser from "../assets/user/requiem.png";
class VoorstellingStore {
  voorstellingen = [];

  constructor(rootStore) {
    this.rootStore = rootStore;

    this.addVoorstelling(
      1,
      `MACBETH`,
      `Macbeth van Shakespeare is ongetwijfeld het meest demonische werk van Giuseppe Verdi. De focus ligt op de vergankelijkheid van de macht. We zijn getuige hoe er een ketting van geweld, terreur en paranoia ontstaat waarbij Macbeth, Lady Macbeth en de heksen op een fatale en destructieve manier aan elkaar zijn overgeleverd. De Duitse regisseur Michael Thalheimer creëert daarmee, na de producties La Forza del Destino en Otello, zijn eigen Verdi-trilogie bij Opera Vlaanderen.`,
      `3u`,
      `1x15min`,
      macbethUser,
      macbeth,
      `antwerpen`,
      2
    );

    this.addVoorstelling(
      2,
      `MIDDAGCONCERT: DEMONS, WITCHES AND MADNESS`,
      `testestestest`,
      `2u`,
      `1x15min`,
      demonsUser,
      demons,
      `antwerpen`,
      2
    );

    this.addVoorstelling(
      3,
      `DON CARLOS`,
      `testestestest`,
      `2u`,
      `1xpauze`,
      doncarlosUser,
      doncarlos,
      `antwerpen`,
      2
    );

    this.addVoorstelling(
      4,
      `AFSCHEID EN NIEUW BEGIN`,
      `testestestest`,
      `2u`,
      `1xpauze`,
      afscheidUser,
      afscheid,
      `antwerpen`,
      2
    );

    this.addVoorstelling(
      5,
      `BACH STUDIOS`,
      `Ballet Vlaanderen haalt met de Franse choreograaf Benjamin Millepied een van de meest gerenommeerde hedendaagse balletchoreografen voor het eerst naar België. Hij creëert voor het eerst een avondvullend werk gebaseerd op werk van Johann Sebastian Bach. Het belooft een unieke, abstracte en toch hoogst emotionele balletavond te worden, gecreëerd door een van de meest innovatieve balletchoreografen van het moment.`,
      `1u45`,
      `1x`,
      bachUser,
      bach,
      `gent`,
      1
    );

    this.addVoorstelling(
      6,
      `AFSCHEID EN NIEUW BEGIN`,
      `testestestest`,
      `2u`,
      `1xpauze`,
      afscheidUser,
      afscheid,
      `gent`,
      1
    );

    this.addVoorstelling(
      7,
      `MOZART: A SYMPHONY OF SONGS`,
      `testestestest`,
      `2u`,
      `1xpauze`,
      mozartUser,
      mozart,
      `gent`,
      1
    );

    this.addVoorstelling(
      8,
      `REQUIEM`,
      `testestestest`,
      `2u`,
      `1xpauze`,
      requiemUser,
      requiem,
      `gent`,
      1
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
    plaats,
    zaalId
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
        plaats,
        zaalId
      )
    );
  };

  findById = id => {
    const voorstelling = this.voorstellingen.find(test => test.zaalId == id);
    return voorstelling;
  };

  findByZaalId = id => {
    const voorstelling = this.voorstellingen.filter(test => test.zaalId == id);
    return voorstelling;
  };

  // OM ALLE VOORSTELLINGEN DIE OVEREEN KOMEN TE VINDEN
  findAllesByPlaats = plaats => {
    const voorstelling2 = this.voorstellingen.filter(
      test => test.plaats == plaats
    );
    return voorstelling2;
  };

  // resolveVoorstelling = id => this.voorstellingen.find(test => test.id === id);
}

decorate(VoorstellingStore, {
  voorstellingen: observable,
  addVoorstelling: action
});

export default VoorstellingStore;
