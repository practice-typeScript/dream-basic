{
  /**
   * Type Inference
   * let text = 'hello' -> string
   * 자동으로 명시해준다.
   * 하지만 정확하게 명시해주는 것이 좋다.
   */

  let text = 'hello';
  function print(message = 'hello') {
    console.log(typeof message);
  }
  print('hello');

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);
}
