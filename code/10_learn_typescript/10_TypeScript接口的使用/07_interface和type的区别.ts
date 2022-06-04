// interface IFoo {
//   name: string
// }

// interface IFoo {
//   age: number
// }

// 上面2个重名，会合并为1个
// const foo: IFoo = {
//   name: "why",
//   age: 18
// }

// document.getElementById("app") as HTMLDivElement
// window.addEventListener

// 下面的就会合并到内部的Window类型中，而不是覆盖
// interface Window {
//   age: number
// }
// window.age = 19
// console.log(window.age)

// type 不允许重名，这是和 interface 最大的区别
type IBar = {
  name: string
  age: number
}

type IBar = {
}

interface IPerson {
  
}

export {}