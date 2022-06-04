class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  // 添加依赖；依赖 = 用到counter的函数
  addEffect(effect) {
    this.subscribers.add(effect);
  }

  // 执行所有依赖
  notify() {
    this.subscribers.forEach(effect => {
      effect();
    })
  }
}


const info = {counter: 100};

const dep = new Dep();

function doubleCounter() {
  console.log(info.counter * 2);
}

function powerCounter() {
  console.log(info.counter * info.counter);
}

dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

info.counter++;
dep.notify(); // 手动执行所有依赖
