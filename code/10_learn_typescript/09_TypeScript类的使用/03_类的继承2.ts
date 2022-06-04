class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log("eating 100行")
  }
}

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    // super调用父类的构造器
    super(name, age) // 调用Person的 constructor ；必须放在Student的constructor的第一行，只有放到第一行，下面的才能用this；
    this.sno = sno
  }

  eating() {
    console.log("student eating")
    super.eating()
  }

  studying() {
    console.log("studying")
  }
}

const stu = new Student("why", 18, 111)
console.log(stu.name)
console.log(stu.age)
console.log(stu.sno)

stu.eating()

export {}

