// Array Method 
// reduce()


const salary = [300, 400, 500, 600]
// a = 0; c =300 => 300
// a = 300; c = 400 => 700
// a = 700; c = 500 => 1200
// a = 1200; c = 600 => 1800
const total = salary.reduce(function (ac, cr){
  return ac +  cr;
},0);


// let total = 0;
// for(let i = 0; i < salary.length; i++){
//   total += salary[i]
// }

console.log(total)

// More Exercise 
const array = ["Pheav", "Dara"];


// firts: fullName = "Pheav"
// 2nd: fullName = "Dara"
// last Result = "Dara"

// next way to think
// fullName = "Pheav"
// fullName = fullName + "Dara" = PheavDara
// array.forEach(function (i){
//   fullName += i
// })
// for(let i = 0; i < array.length; i++){
  
//   fullName += array[i]
// }
// console.log(fullName)

// How to use reduce for concat 2 items

const fullName = array.reduce(function(ac, cr){
  return `${ac} ${cr}`
})
console.log(fullName)