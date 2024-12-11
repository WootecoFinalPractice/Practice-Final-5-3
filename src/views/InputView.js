import { Console } from '@woowacourse/mission-utils';

class InputView {
  static readBridgeSize() {
    return Console.readLineAsync(`다리 건너기 게임을 시작합니다.\n\n다리의 길이를 입력해주세요.\n`);
  }

  static readMove() {
    return Console.readLineAsync(`이동할 칸을 선택해주세요. (위: U, 아래: D)\n`);
  }
}

export default InputView;
