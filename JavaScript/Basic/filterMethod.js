const userData = [ 
  {
    name: "Kosal",
    age: 20,
    job: "teacher"
  },
  {
    name: "Chena",
    age: 30,
    job: "IT"
  },
  {
    name: "Sambat",
    age: 25,
    job: "CEO"
  },
  {
    name: "Sopheak",
    age: 20,
    job: "Web"
  },
]

console.log(userData[4])
const finding = userData.filter(function (item) {

  // return as array item 
  return item.age >= 20; 
})
// console.log(finding)