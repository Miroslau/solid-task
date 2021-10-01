//В данном коде происходит нарушение Liskov Substitution принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

abstract class Figure {
  abstract calculateArea(): number
}

class Rectangle extends Figure{
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width + this.height
  }
}

class Circle extends Figure{
  public radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
function computeSpace(shape: Figure) {
  return shape.calculateArea()
}

console.log(computeSpace(new Circle(5)))
console.log(computeSpace(new Rectangle(10, 10)))