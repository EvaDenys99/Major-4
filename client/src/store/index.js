import VoorstellingStore from "./VoorstellingStore";
import AktStore from "./AktStore";
import NotificatieStore from "./NotificatieStore";
class Store {
  constructor() {
    this.voorstellingStore = new VoorstellingStore(this);
    this.aktStore = new AktStore(this);
    this.notificatieStore = new NotificatieStore(this);
  }
}

export default new Store();
