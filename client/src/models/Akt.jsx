class Akt {
  constructor(id, naam, VoorstellingId, VoorstellingTitel, store) {
    this.id = id;
    this.naam = naam;
    this.VoorstellingId = VoorstellingId;
    this.VoorstellingTitel = VoorstellingTitel;
    this.store = store;
  }

  // get voorstelling() {
  //   return this.store.voorstellingStore.resolveVoorstelling(
  //     this.voorstellingId
  //   );
  // }
}

export default Akt;
