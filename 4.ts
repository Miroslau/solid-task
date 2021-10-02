//В данном коде происходит нарушение Interface Segregation принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

interface IFly {
  fly(): void;
}

interface IDrive {
  drive(): void;
}

class AirPlane implements IFly, IDrive {
  public fly() {
    console.log("I can fly");
  }

  public drive() {
    console.log("I can drive");
  }
}

class Car implements IDrive {
  public drive() {
    console.log("I can drive");
  }
}

const myPlane = new AirPlane()
const myCar = new Car()

console.log(myPlane.drive())
console.log(myPlane.fly())

console.log(myCar.drive())