type Person = {
  name: string
  friend?: {
    name: string
  }
}

const info: Person = {
  name: "why",
}


// 另外一个文件中
// console.log(info.name)
console.log(info.friend!.name)

console.log(info.friend?.name) // undefined
console.log(info.friend.name) // 运行时报错，Object is possibly 'undefined'
// console.log(info.friend?.age)
// console.log(info.friend?.girlFriend?.name)



// if (info.friend) {
//   console.log(info.friend.name)

//   if (info.friend.age) {
//     console.log(info.friend.age)
//   }
// }






