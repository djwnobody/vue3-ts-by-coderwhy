// class Person {
// 对象实例属性
//   name: string = ""
//   age: number = 12
// }

// const p = new Person()
// p.name = "123"

class Student {
  // 类属性/方法
  static time: string = '20:00'

  static attendClass() {
    console.log('去学习~')
  }
}

console.log(Student.time)
Student.attendClass()

export {}
