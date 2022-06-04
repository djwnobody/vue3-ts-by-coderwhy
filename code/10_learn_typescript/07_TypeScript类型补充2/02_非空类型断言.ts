// message? -> undefined | string
function printMessageLength(message?: string) {
  // vue3源码
  // if (message) {
  // console.log(message.length)
  // }
  console.log(message!.toUpperCase())
}

printMessageLength("aaaa")
printMessageLength("hello world")
printMessageLength()

