{
  // number
  const num: number = 1;

  //string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // 안쓴다.
  let age: number | undefined; // 보편적으로 null보다는 undefined를 사용한다.
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 단독으로 쓰지 않는다.
  let person2: string | null;

  // unknown 알수없는 -> 가능하면 쓰지 말자. 타입이 없는 자바스크립트와 연동해서 쓸 수 있기 떄문에 사용한다. 타입에서 자바스크립트 라이브러리를 사용할때 필요할 수 있다.
  let notSure: unknown; // 어떤 타입의 데이터가 담길지 알 수 없다. 어떤 데이터든 담을 수 있다.
  notSure = 'he';
  notSure = true;

  // any 어떤 값이든 담을 수 있다 -> 가능하면 쓰지말자. unknown은 의미적으로라도 쓸 수있지만. any는 해당 이유도 없기 때문에 쓰지말자.
  let anything: any = 0;
  anything = 'hello';

  // void 아무것도 반환하지 않는 함수 -> void인 경우는 생략할 수있다. 회사의 규정에따라 다르다.
  function print(): void {
    console.log('hello');
  }

  let unusable: void = undefined; // undefined만 할당 가능해서 변수에는 사용하지 않는다.

  //never
  // 함수에서 절대적으로 리턴되지 않을떄 명시적으로 사용한다.
  // 변수에 할당하지 않는다.
  // throw를 던지면 함수가 죽기 때문에 리턴 값이 없다. 리턴할 계회없다.
  function throwError(message: string): never {
    // message -> server(log)
    // throw new Error(message)
    while (true) {
      // 무한루프에 해당해도 never.
    }
  }

  // objet
  let obj: object; // 원시타입을 제외한 모든 오브젝트를 담을 수 있다. -> 안쓰는 것이 좋다.
  // obj도 좀더 명시적으로 정하는 것이 좋다.
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
