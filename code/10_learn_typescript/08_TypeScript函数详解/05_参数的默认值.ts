// 必传参数 - 有默认值的参数 - 可选参数
function foo(x: number, y: number = 20) {
  console.log(x, y)
}

foo(30)

function bar(x: number = 20, y: number) {
  console.log(x, y)
}
bar(null,30) // 报错
bar(undefined,30)