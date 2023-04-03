// interface는 재선언한다면, 덮어씌우거나 에러가 발생하는 것이 아니라, 조건이 추가된다. concat api와 비슷하다고 할수 있다.
// type은 불가능하다.
// interface는 호이스팅과 동시에 기능을 사용가능하다. 함수 선언문과 동일한듯 하다. 즉, interface를 적용한 함수보다 아래에서 선언해도 interface가 제대로 적용된다는 것이다.

{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // * 둘다 가능

  // object *

  const obj1: PositionType = {
    x: 1,
    y: 2,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 2,
    z: 1,
  };

  // class *
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends *
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositionType = PositionType & { z: number };

  // interfaces만 가능한 기능. merged

  interface PositionInterface {
    z: number;
  }

  // type PositionType{} 불가능

  // Type aliases can use computed properties

  type Person = {
    name: string;
    age: number;
  };

  type Name = Person['name']; // string
  type NumberType = number;
  type Direction = 'left' | 'right'; // union
}
