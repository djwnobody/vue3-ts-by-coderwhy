class Person {
  name: string = '123'
  eating() {}
}

const p = new Person()

const p1: Person = {
  name: 'why',
  eating() {},
}

// 类也可以作为一种类型
function printPerson(p: Person) {
  console.log(p.name)
}

printPerson(new Person())
printPerson({ name: 'kobe', eating: function () {} }) // 只要有name、eating属性即可,不一定非要new一个实例;

export {}
