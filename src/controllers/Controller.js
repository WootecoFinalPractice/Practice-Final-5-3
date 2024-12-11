import Bridge from '../models/Bridge.js';
import InputView from '../views/InputView.js';

class Controller {
  static async run() {
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = Bridge.makeBridge(bridgeSize);
    console.log(bridge);
  }
}

export default Controller;
