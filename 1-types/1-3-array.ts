{
  // Array
  // 두 가지 방법 다 가능하나.
  //string[]은 readonly를 사용가능하기 때문에 이 방법을 추천한다.
  // readonly는 받은 인자를 수정 불가능한 읽기 전용으로 만든다. 불변성을 보장한다.
  const fruits: string[] = ['apple', 'banna'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    fruits.push;
  }

  // Tuple
  // 서로다른 데이터 타입을 배열에 저장가능하다.
  // 권장하지 않는다. 가독성이 매우 떨어진다.
  // interface, type alias, class같은 애들로 대체해서 사용하는 것이 좋다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = setState(); // 리액트의 setState를 살펴보면 Tuple을 사용하고 있다. 이런경우에는 유용하게 사용가능하나 위에 적은 대체가능한 것들을 사용하는 것을 권장한다.
}
