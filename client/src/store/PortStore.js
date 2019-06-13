import { decorate, observable, configure, runInAction } from "mobx";

configure({ enforceActions: `observed` });

class PortStore {
  port = `https://pushlines-obv.herokuapp.com`;
  constructor(rootStore) {
    this.rootStore = rootStore;

    // fetch(`/api/port`)
    //   .then(response => response.json())
    //   .then(portObject => {
    //     runInAction(() => {
    //       this.port = portObject.port;
    //     });
    //   });
  }
}

decorate(PortStore, {
  port: observable
});

export default PortStore;
