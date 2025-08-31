const userData = [
  {id: 1, name: "Pheav Dara", age: 20},
  {id: 2, name: "Heng Makara", age: 21},
  {id: 3, name: "Than Somnang", age: 18},
  {id: 4, name: "Pheav Chantrea", age: 20},
  {id: 5, name: "Heng Menghoy", age: 21},
  {id: 6, name: "Than Vichaka", age: 24},
  ];
const productData = [{ name: "dara" , address: "Phnome Penh"}]
  

import {userData, productData as ProData} from "./Data/data.js"
const filter = (users) => {
  return users.filter(user => user.age === 20)
}

export {userData, productData}