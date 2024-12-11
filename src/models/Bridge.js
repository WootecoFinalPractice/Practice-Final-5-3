import { Random } from '@woowacourse/mission-utils';
// import OutputView from '../views/OutputView.js';

class Bridge {
  constructor() {
    this.bridge = [];
    this.drawBridge = [];
  }

  makeBridge(size) {
    for (let i = 0; i < size; i += 1) {
      this.bridge[i] = Random.pickNumberInRange(0, 1);
    }
    return this.bridge;
  }

  judge(bridgeLike, userMove, i) {
    if (userMove === 'U' && bridgeLike[i] === 1) {
      // 통과
      this.drawBridge.push('US');
    }
    if (userMove === 'D' && bridgeLike[i] === 0) {
      // 통과
      this.drawBridge.push('DS');
    }
    if (userMove === 'D' && bridgeLike[i] === 1) {
      // 실패
      this.drawBridge.push('DF');
    }
    if (userMove === 'U' && bridgeLike[i] === 0) {
      // 실패
      this.drawBridge.push('UF');
    }
    return this.drawBridge;
  }
}

export default Bridge;
