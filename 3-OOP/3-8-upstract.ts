// upstract
// 클래스 앞에 붙인다.
// 클래스 내에 메서드에 앞에 abstract를 붙인다. 자식에서 사용해야하기 때문에 private은 사용 불가능하고 protected를 사용한다.
// 추상적인 메시지라 구현사항은 구현하면 안된다.

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // public 기본 설정
  // priavate 외부에서 볼수 없고 접근할 수 없다.
  // proteted 외부에서 접근이 불가능하나, 상속된 자식 클래스인 경우는 접근이 가능하다.

  // interfact ->계약서 . 인터페이스라면 앞에 ICoffeeMaker I라고 붙이는 사람이 있거나 아니면 클래스 앞에
  // 추상화를 조금 더 극대화해서 사용가능하다.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // implements 인터페이스를 구현하는 클래스라면 interface에서 명시한 모든 함수를 구현해야한다.
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, readonly seriaNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk...');
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('-------------');
    machine.makeCoffee(1);
  });
}
