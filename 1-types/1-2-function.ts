{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript

  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // function jsFetchNum(id: string): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript => TypeScript
  // Optional parameter
  // ?옵셔널 파라미터. 값을 전달해도 되고 안해도 된다.
  // parameter는 2개인데 전달하는 전달하는 agument는 하나일 경우 에러가 발생하기 때문에 ?를 사용하거나 | undefinde를 추가해야한다.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
