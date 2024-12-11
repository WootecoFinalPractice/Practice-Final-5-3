import Bridge from '../models/Bridge.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  static async run() {
    let count = 0;
    let retry = true;
    const bridgeSize = Number(await InputView.readBridgeSize());
    const bridge = new Bridge();
    const bridgeLike = bridge.makeBridge(bridgeSize);
    console.log(bridgeLike);

    while (retry) {
      for (let i = 0; i < bridgeSize; i += 1) {
        console.log(i);
        console.log(bridgeSize);
        const userMove = await InputView.readMove();
        const drawBridge = bridge.judge(bridgeLike, userMove, i);
        OutputView.draw(drawBridge);

        if (drawBridge.includes('UF') || drawBridge.includes('DF')) {
          const retryInput = await InputView.readRetry();
          if (retryInput === 'R') {
            count += 1;
            bridge.drawBridge = [];
            break;
          } else {
            retry = false;
            OutputView.print('최종 게임 결과\n');
            OutputView.draw(drawBridge);
            OutputView.printFail(count);
            break;
          }
        } else if (i === bridgeSize - 1 && !drawBridge.includes('UF') && !drawBridge.includes('DF')) {
          OutputView.print('최종 게임 결과\n');
          OutputView.draw(drawBridge);
          OutputView.printSuccess(count);
          retry = false;
        }
      }
    }
  }
}

export default Controller;
