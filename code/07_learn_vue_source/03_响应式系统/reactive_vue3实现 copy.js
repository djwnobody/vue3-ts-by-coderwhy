// 为对象的每一个属性创建的，不是为对象创建的
class Dep {
  constructor() {
    this.subscriber = new Set()
  }
  addEffect() {
    if (activeEffect) {
      this.subscriber.add(activeEffect)
    }
  }
  notify() {
    this.subscriber.forEach((effect) => {
      effect()
    })
  }
}

function reactive(raw) {
  return new Proxy(raw,{
    get(target,key){
      const dep = getDep(target,key)
      dep.addEffect()
      return target[key]
    },
    set(target,key,newVal){
      target[key] = newVal
      const dep = getDep(target, key)
      dep.notify()
    }
  })
}

const targetMap = new WeakMap()
function getDep(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }

  return dep
}
/*
targetMap类似于：
{
  obj1:{
    counter:dep对象，里面有[f1,f2],
    name:dep对象，里面有[f3]
  },
  obj2:{
    height:dep对象，里面有[f4,f5,f6]
  }
}
*/

let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

// 测试代码
const info = reactive({ counter: 100, name: 'why' })
const foo = reactive({ height: 1.88 })

// watchEffect1
watchEffect(function () {
  console.log('effect1:', info.counter * 2, info.name)
})

// watchEffect2
watchEffect(function () {
  console.log('effect2:', info.counter * info.counter)
})

// watchEffect3
watchEffect(function () {
  console.log('effect3:', info.counter + 10, info.name)
})

watchEffect(function () {
  console.log('effect4:', foo.height)
})

info.counter++
// info.name = "why";

// foo.height = 2
