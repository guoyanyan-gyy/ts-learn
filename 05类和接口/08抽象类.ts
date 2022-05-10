abstract class shape {
  abstract getShape(): number;
}

class Rectangle extends shape {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  getShape() {
    return this.width * this.height;
  }
}

class Circle extends shape {
  private r: number;
  constructor(r: number) {
    super();
    this.r = r;
  }
  getShape() {
    return this.r * 2 * 3.14;
  }
}

function getMath(shape: shape) {
  return shape.getShape();
}
console.log(getMath(new Circle(2)));
console.log(getMath(new Rectangle(2, 3)));

export {};
