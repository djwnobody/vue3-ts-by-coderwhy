// tuple元组: 多种元素的组合
// "why" 18 1.88

// 1.数组的弊端
const info1: (string | number)[] = ['why', 18, 1.88]
const name1 = info1[0]

const info: [string, number, number] = ['why', 18, 1.88]
const name = info[0]


console.log(name.length)
// const age = info[1]
// console.log(age.length)

export {}
