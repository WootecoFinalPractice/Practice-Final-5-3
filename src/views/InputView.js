import { Console } from '@woowacourse/mission-utils';

class InputView {
  static readBridgeSize() {
    return Console.readLineAsync(`다리 건너기 게임을 시작합니다.\n\n다리의 길이를 입력해주세요.\n`);
  }

  static readMove() {
    return Console.readLineAsync(`이동할 칸을 선택해주세요. (위: U, 아래: D)\n`);
  }

  static readRetry() {
    return Console.readLineAsync(`게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`);
  }
}

export default InputView;
