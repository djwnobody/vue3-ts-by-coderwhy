// 可以想象成该文件又分了2个模块
export namespace time {
  export function format(time: string) {
    return "2222-02-22"
  }

  export function foo() {

  }

  export let name: string = "abc"

  const age = 18 // 只有export，外面才能使用
}

export namespace price {
  export function format(price: number) {
    return "99.99"
  }
}

console.log(time.name);
// console.log(time.age)
