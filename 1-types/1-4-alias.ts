{
  /**
   *  Type Aliases
   *  직접 원하는 타입을 설정한다.
   *  똑같은 키와 값으로 만들어야한다.
   *  하나라도 빠지면 error가 발생한다
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'ellie',
    age: 1,
  };

  /**
   * String Literal Types
   * union에 사용한다.
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
