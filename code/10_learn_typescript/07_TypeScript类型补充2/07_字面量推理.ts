// const info = {
//   name: "why",
//   age: 18
// }

// info.name = "kobe"

// 



// type Request = {
//   url: string,
//   method: Method
// }

const options = {
  url: 'https://www.coderwhy.org/abc',
  method: 'POST',
} as const

type Method = 'GET' | 'POST'
function request(url: string, method: Method) {}

request(options.url, options.method)

export {}
