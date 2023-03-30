// 캡슐화

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public 기본 설정
  // priavate 외부에서 볼수 없고 접근할 수 없다.
  // proteted 외부에서 접근이 불가능하나, 상속된 자식 클래스인 경우는 접근이 가능하다.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0)
        throw new Error('value for beans should be greater than 0');
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT)
        throw new Error('Not enough coffee beans!');
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) throw Error('');
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User('Steve', 'Jobs');
  user.age = 6;
}
