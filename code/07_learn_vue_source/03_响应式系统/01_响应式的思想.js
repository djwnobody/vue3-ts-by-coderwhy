
const info = {counter: 100};

function doubleCounter() {
  console.log(info.counter * 2);
}

doubleCounter();


info.counter++;
// doubleCounter(); // counter变了，函数依赖counter，希望自动执行这一行代码
