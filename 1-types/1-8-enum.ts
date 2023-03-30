{
  /**
   * Enum
   * 연관성이 있는 여러가지의 상수 값들을 freeze로 얼려 읽기 전용으로 사용하는 것을 말한다.
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUSDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 3,
  });
  const dayOfTody = DAYS_ENUM.MONDAY;

  // TypeScript
  /**
   * 앞의 글자만 대문자로 나머지는 소문자로 해야한다.
   * 값을 정하지 않으면 자동으로 0부터 시작하는 값들을 할당한다.
   * 타입스크립트에서는 가능한 사용하지 않는것이 좋다.
   */

  enum Days {
    Monday = 10, // 0
    Tuesday, // 1
    Wednesday, // 직접 할당해도 된다.
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }

  console.log(Days.Tuesday);

  let day: Days = Days.Satarday;
  console.log(Days.Tuesday);

  day = Days.Tuesday; // 문제점: enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당하는하다는 것이 문제
  day = 13; // 이번에 5.0으로 업데이트 되면서 enum을 생성할떄 할당하지 않은 숫자를 할당하면 type 에러가 발생한다.
}
