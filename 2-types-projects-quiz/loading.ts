{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (loading: ResourceLoadState) => {
    switch (loading.state) {
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(loading.response.body);
        break;
      case 'fail':
        console.log(loading.reason);
        break;
      default:
        throw Error(`unknown state: ${loading}`);
    }
  };

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
