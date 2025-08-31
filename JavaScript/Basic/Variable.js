// Rule of declare varibale
// 1. cannot write number first like (let 2n = 10)
// 2. can not write key word like (let let = 10, let function = 10, var if = 10...)

// Variable
// let var const
// let const (block-scope) មិនអាច console វានៅខាងក្រៅ scope បាន
// var (function-scope) can console outside of the scope but if it is a function can not console outside of the scope



// let and const 
if(true){
  let x = 10
  const y = 20;
  console.log(x, y)
}
//console.log(x, y) -can not


// var
if(true){
  var num = 10;
  console.log(num);
}
console.log(num);
function myFunc(){
  let number = 200;
  console.log(number); // - can
}
// console.log(number); - can not
myFunc();


// Multiple Variable
let x, y ,z;

x = 10;
y = 20;
z = 30;

const total = x + y + z;

console.log("total os x + y + z: ", total);



