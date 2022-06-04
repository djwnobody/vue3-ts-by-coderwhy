/*
const obj1 = {
  a:1,
  b:2
}
const obj2 = {
  c:3
}
Object.assign(obj1,obj2)
console.log(obj1);
*/
const arr = [1,2,3,4]
const sum = arr.reduce((prev,item)=>{
  return prev + item
},0)
console.log(sum);

function hyReduce(arr){
  let sum = 0
  for(let i=0;i<arr.length;i++){
    sum += arr[i]
  }
  return sum
}
console.log(hyReduce(arr));