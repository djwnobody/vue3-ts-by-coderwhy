
function makeArea(shape: Shape) {
  return shape.getArea()
}


abstract class Shape {
  abstract getArea(): number // 没有函数体
  // 抽象类有2个用处：  1.抽象类不能实例化，第46行；  2.子类必须有getArea方法
}


class Rectangle extends Shape {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  private r: number

  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle))
console.log(makeArea(circle))
// makeArea(new Shape())

// makeArea(123)
// makeArea("123")

