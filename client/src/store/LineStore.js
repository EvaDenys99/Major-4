import { configure } from "mobx";
import cogoToast from "cogo-toast";
configure({ enforceActions: `observed` });
const io = require(`socket.io-client`);
const socket = io.connect(`pushlines-obv.herokuapp.com`, {
  transports: [`websocket`]
});
class LineStore {
  messages = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  meldingShow = msg => {
    socket.on(`chat message`, function(msg) {
      cogoToast.success(msg, {
        position: `top-center`
      });
      this.messages.push(msg);
      console.log(this.messages);
    });
  };
}

export default LineStore;
