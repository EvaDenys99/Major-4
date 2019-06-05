import VoorstellingStore from "./VoorstellingStore";
import AktStore from "./AktStore";
import NotificatieStore from "./NotificatieStore";
import ZaalStore from "./ZaalStore";
class Store {
  constructor() {
    this.voorstellingStore = new VoorstellingStore(this);
    this.aktStore = new AktStore(this);
    this.notificatieStore = new NotificatieStore(this);
    this.zaalStore = new ZaalStore(this);
  }
}

export default new Store();
