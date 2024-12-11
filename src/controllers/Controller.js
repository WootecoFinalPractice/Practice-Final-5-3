import Bridge from '../models/Bridge.js';
import InputView from '../views/InputView.js';

class Controller {
  static async run() {
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = Bridge.makeBridge(bridgeSize);
    const userMove = await InputView.readMove();
    Bridge.judge(bridge, userMove);
    console.log(bridge);
    console.log(userMove);
  }
}

export default Controller;
