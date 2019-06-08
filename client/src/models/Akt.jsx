class Akt {
  constructor(id, naam, VoorstellingId, VoorstellingZaal, store) {
    this.id = id;
    this.naam = naam;
    this.VoorstellingId = VoorstellingId;
    this.VoorstellingZaal = VoorstellingZaal;
    this.store = store;
  }

  // get voorstelling() {
  //   return this.store.voorstellingStore.resolveVoorstelling(
  //     this.voorstellingId
  //   );
  // }
}

export default Akt;
