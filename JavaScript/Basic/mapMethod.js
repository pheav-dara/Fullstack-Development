// Map Method​​​ជារបៀបដែលយើងធ្វើការ Transform ទៅកាន់ Array ដែលមានទិន្នន័យស្រាប់ហើយយើងអាចធ្វើការបន្ថែមក្ដោបទៅកាន់ ​Array មួយហ្នឹង
// Return as new array

const userData = [
  {
    name: "Pheav Dara",
    age: 20,
    job: "FullStack Developer",
  },
  {
    name: "Som Kodal",
    age: 20,
    job: "Web Developer",
  },
  {
    name: "Sok Cheang",
    age: 20,
    job: "App Developer",
  },
  {
    name: "Thol Vanak",
    age: 20,
    job: "FullStack Developer",
  },
];

const newArray = userData.map(function(item){
  return `<h3> ${item.name} </h3>` ;
}).join("");

document.body.innerHTML = newArray;
console.log(newArray)