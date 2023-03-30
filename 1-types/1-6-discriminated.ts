{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state)
  // success -> body
  // fail -> reason

  /**
   * discriminated Union
   * 공통적인 property를 가지고 있다면 바로 접근이 가능하다.
   * 'response' in state -> state.result === 'success'
   */
  function printLoginState(state: LoginState) {
    state.result; // success or fail
    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
