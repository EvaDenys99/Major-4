import VoorstellingStore from "./VoorstellingStore";

class Store {
  constructor() {
    this.voorstellingStore = new VoorstellingStore(this);
  }
}

export default new Store();
