interface IPerson {
  name: string
  age: number
  height: number
}

// 下面代码报错
// const inf0: IPerson = {
//   name: 'why',
//   age: 18,
//   height: 1.88,
//   address: '广州市',
// }

// const info = {
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市"
// }

// // freshness擦除
// const p: IPerson = info // 去除address属性的类型检测，所以 info 只能多不能少；

// console.log(info)
// console.log(p) // { name: 'why', age: 18, height: 1.88, address: '广州市' }


function printInfo(person: IPerson) {
  // 函数体内的代码会依据 IPerson 类型：IPerson 有什么属性才能用什么属性；
  console.log(person.address)
}

// 代码会报错
// 因为相当于把这个对象赋给了形参person
// printInfo({
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市"
// })

const info = {
  name: "why",
  age: 18,
  height: 1.88,
  address: "广州市"
}

printInfo(info)
// 意义就是：按照严格的类型检测，info根本传不进去，正因为有了擦除操作，有多余属性的对象也可以传进去，但函数内部不需要使用多余的属性；
