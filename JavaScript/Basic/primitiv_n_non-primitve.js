// Primitive DataType there are string, number, boollean, ...
let x = 20;
let y = x; // already copy


x = 50;
console.log(x, y)

/// Non-primitive Datatype array and object
const obj = {
  name: "dara",
  age: 20
}
const newObj = obj;

obj.age = 21

console.log(obj, newObj)

// what is difference between primitive and non-primitive
// primitive ប្រសិនប់វាទទទួលតម្លៃហើយ នៅពេលយើង reasign value ​ម្ដងទៀតវាមិនផ្លាស់ប្ដូរឡើយ
// non-primitive ផ្ទុយពី primitive you test the example above. 


