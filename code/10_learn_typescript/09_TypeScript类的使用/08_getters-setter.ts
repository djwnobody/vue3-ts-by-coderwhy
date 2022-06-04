class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  // 访问器setter/getter
  // setter
  set name(newName) {
    this._name = newName
  }
  //p.name = "coderwhy"，像修改public的一样

  // getter
  get name() {
    return this._name
  }
  // console.log(p.name)，像使用public的一样
}

const p = new Person('why')
p.name = 'coderwhy'
console.log(p.name)

export {}
