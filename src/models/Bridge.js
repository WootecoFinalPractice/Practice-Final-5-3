import { Random } from '@woowacourse/mission-utils';

class Bridge {
  static makeBridge(size) {
    const bridge = [];
    for (let i = 0; i < size; i += 1) {
      bridge[i] = Random.pickNumberInRange(0, 1);
    }
    return bridge;
  }
}

export default Bridge;
