// 추출

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public 기본 설정
  // priavate 외부에서 볼수 없고 접근할 수 없다.
  // proteted 외부에서 접근이 불가능하나, 상속된 자식 클래스인 경우는 접근이 가능하다.

  // interfact ->계약서 . 인터페이스라면 앞에 ICoffeeMaker I라고 붙이는 사람이 있거나 아니면 클래스 앞에
  // 추상화를 조금 더 극대화해서 사용가능하다.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // implements 인터페이스를 구현하는 클래스라면 interface에서 명시한 모든 함수를 구현해야한다.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0)
        throw new Error('value for beans should be greater than 0');
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT)
        throw new Error('Not enough coffee beans!');
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // CoffeeMachine === CoffeeMaker 하지만 fillCoffeeBeans는 존재하지 않아서 사용이 불가능 하다.
  // 내가 얼마만큼의 행동을 할 수 있도록 제약을 걸 수 있다.

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);

  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
