// Ternary Operator

20 > 10 ? console.log("True") : console.log("False")


// If else 
function aging(age){
  if(age >= 18){
    console.log("Adult");
  }else{
    console.log("Still young")
  }
}
aging(18)

// Ternary Operator
function aging(age){
  return age >= 18 ? "Adult" : "Still young"
}
console.log(aging(15))

const aging1 = (age) => (age >= 18 ? "Adult" : "Still young");
console.log(aging1(20))