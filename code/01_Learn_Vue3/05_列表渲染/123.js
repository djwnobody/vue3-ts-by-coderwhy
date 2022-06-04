const arr = [
  { name: 'xxx', age: 10 },
  { name: 'yyy', age: 18 },
]

arr.forEach((item) => {
  item.name = 'djw' 
})
console.log(arr)//[ { name: 'djw', age: 10 }, { name: 'djw', age: 18 } ]
