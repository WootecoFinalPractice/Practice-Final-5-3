import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static draw(drawBridge) {
    const [bridgeUp, bridgeDown] = this.lightdraw(drawBridge);
    Console.print(`[ ${bridgeUp.join(' | ')} ]`);
    Console.print(`[ ${bridgeDown.join(' | ')} ]`);
  }

  static lightdraw(drawBridge) {
    const bridgeUp = [];
    const bridgeDown = [];

    drawBridge.forEach(data => {
      if (data === 'US') {
        bridgeUp.push('O');
        bridgeDown.push(' ');
      } else if (data === 'DS') {
        bridgeUp.push(' ');
        bridgeDown.push('O');
      } else if (data === 'UF') {
        bridgeUp.push('X');
        bridgeDown.push(' ');
      } else if (data === 'DF') {
        bridgeUp.push(' ');
        bridgeDown.push('X');
      }
    });

    return [bridgeUp, bridgeDown];
  }

  static printFail(count) {
    Console.print('게임 성공 여부: 실패');
    Console.print(`총 시도한 횟수: ${count}`);
  }

  static printSuccess(count) {
    Console.print('게임 성공 여부: 성공\n');
    Console.print(`총 시도한 횟수: ${count}`);
  }

  static print(input) {
    Console.print(input);
  }
}

export default OutputView;
