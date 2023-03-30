{
  /**
   * Union Types: OR
   *
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;

  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state)
  // success -> body
  // fail -> reason

  /**
   * 현재 LoginState union은 두가지의 타입으로 정해질 수 있기 때문에
   * state.response를 사용해 접근이 불가능하다. 타입은 아직 알 수 없다.
   * 때문에 'response' in state, state 안에 'response'가 존재하는지 확인후에
   * state.response 사용이 가능하다.
   * 이 방법으로 접근이 가능하나 권장하지 않는다.
   * 다음 Discriminated Union을 사용하자
   */
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
