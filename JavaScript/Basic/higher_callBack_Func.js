// Higher Order & CallBack Function

// Higher Order Funtion is a Functions that get value as its Parameter
// CallBack Function is a Functions that past as Parameter inside Higher Order Function

function greeting(cbf, name) {
  return (`Hello ${cbf(name)} how are you?`);
}

const result = greeting(function(n){
  return n;
}, "Pheav Dara" )
console.log(result)
