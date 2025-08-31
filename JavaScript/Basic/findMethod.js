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
const names = ['heng', 'sok']
// find method return only 1 item, not return as array it just return as item 
// it return follow by item: if item as string it return string if item as object it return as the object
const finding = names.find(function (item) {
  return item == 'sok';
})
console.log(finding)
