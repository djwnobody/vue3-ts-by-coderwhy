class Person {
  private name: string = "" // name只能在 class Person{} 大括号内部使用，不能出现在大括号外面

  // 封装了两个方法, 通过方法来访问name
  getName() {
    return this.name
  }

  setName(newName) {
    this.name = newName
  }
}

const p = new Person()
// private的东西不能直接通过实例对象拿到
// console.log(p.name);
// const msg = p.name

console.log(p.getName())
p.setName("why")

export {}