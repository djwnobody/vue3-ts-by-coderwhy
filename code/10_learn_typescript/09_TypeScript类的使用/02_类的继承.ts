class Person {
  name: string 
  age: number 

  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }

  eating() {
    console.log("eating")
  }
}

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    super(name, age)
    this.sno = sno
  }

  studying() {
    console.log('studying')
  }

  eating() {
    console.log('student eating')
    super.eating()
  }
}

/* extends的作用
extends 把 Person 的所有东西拿到 Student 内,除了 constructor;
constructor 有特殊的关键字super;
class Student {
  name: string 
  age: number 
  sno: number 

  constructor(name: string, age: number,sno:number) {
    this.name = name
    this.age = age
    this.sno = sno
  }

  eating() {
    console.log("eating")
  }

  studying() {
    console.log('studying')
  }
}
*/

const stu = new Student()
stu.name = "coderwhy"
stu.age = 10
console.log(stu.name)
console.log(stu.age)
stu.eating()

