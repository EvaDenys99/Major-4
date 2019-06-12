import VoorstellingStore from "./VoorstellingStore";
import AktStore from "./AktStore";
import NotificatieStore from "./NotificatieStore";
import ZaalStore from "./ZaalStore";
import UiStore from "./UiStore";
import LineStore from "./LineStore";
class Store {
  constructor() {
    this.voorstellingStore = new VoorstellingStore(this);
    this.aktStore = new AktStore(this);
    this.notificatieStore = new NotificatieStore(this);
    this.zaalStore = new ZaalStore(this);
    this.uiStore = new UiStore(this);
    this.lineStore = new LineStore(this);
  }
}

export default new Store();
