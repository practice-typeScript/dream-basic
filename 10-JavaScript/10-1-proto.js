const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];

function CoffeeMachine(beans) {
  this.beans = beans;
  // this.makeCoffee = (shots) => {
  //   console.log('making...');
  // };
}

CoffeeMachine.prototype.makeCOffee = (shots) => {
  console.log('making...');
};

const machine1 = new CoffeeMachine(10);

const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

const latteMachine = new LatteMachine(123);

console.log(latteMachine);
