class Akt {
  constructor(id, naam, VoorstellingId, store) {
    this.id = id;
    this.naam = naam;
    this.VoorstellingId = VoorstellingId;

    this.store = store;
  }

  // get voorstelling() {
  //   return this.store.voorstellingStore.resolveVoorstelling(
  //     this.voorstellingId
  //   );
  // }
}

export default Akt;
