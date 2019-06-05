import VoorstellingStore from "./VoorstellingStore";
import AktStore from "./AktStore";

class Store {
  constructor() {
    this.voorstellingStore = new VoorstellingStore(this);
    this.aktStore = new AktStore(this);
  }
}

export default new Store();
