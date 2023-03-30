{
  /**
   * Type Assertions
   * 좋지 않은 방법이라 피하는 것이 좋다.
   */

  function jsStrFunc(): any {
    return 1;
  }
  const result = jsStrFunc(); // any타입 -> 리턴 값이 string이더라도 any가 반환된다고 타입을 지정했기 때문에 any타입이다. 이는 string api를 사용은 가능하지만, vsc 추천(?)에는 나오지 않는다.

  console.log((result as string).length); // string이라고 알고있다. 100% 장담할 때 쓰자. 만약 string이 아닌 다른 타입이면 undefined를 반환한다.
  console.log((<string>result).length); // 똑같다.

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // error: wrong.push is not a function -> 실시간으로 죽는것은 자바스크립트와 같다. 그러니 사용하지 않는 것을 추천한다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // numbers.push(2); // number을 담은 배열일수도 있고 undefined 일 수 도 있다.
  numbers!.push(2); // !는 100% 확신할떄. 이것을 나는 확신해! 라는 뜻
  // const numbers = findNumbers()! // 할당 중 뒤에 !를 써도 확신한다는 뜻이다.

  const button = document.querySelector('class')!; // ! 100% 확신한다.
  button.nodeType; // querySelector는 element 또는 null를 반환하기 때문에 조건문 또는 옵셔널 체이닝 드으로 정확히 판별한 후가 아니라면 error가 발생한다.
}
