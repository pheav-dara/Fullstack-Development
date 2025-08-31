const obj = {data: {name: 'dara', age: 20}}

// modified
//const newData = obj.data.name  can not modify
// data = 'Somnang' can not work
// const newData = obj.data
// newDatata.name = 'Somnang' // you need to do this  
// console.log(newData)

// obj.data.name = 'Somnang'
const newData = obj.data
newData.name = 'Somnang';
console.log(obj)