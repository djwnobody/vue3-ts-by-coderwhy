// 函数的重载: 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载
function add(num1: number, num2: number): number; // 没函数体,只有函数类型的声明
function add(num1: string, num2: string): string;

function add(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length
  }
  return num1 + num2
}

const result = add(20, 30) // 先去匹配第2行的函数类型，再去调用第5行的函数
const result2 = add("abc", "cba")
console.log(result)
console.log(result2)

// 在函数的重载中, 实现函数（第6行）是不能直接被调用的
// add({name: "why"}, {age: 18})

export {}
