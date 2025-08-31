const names = ["Dara", "Perng", "Kosal", "Somnang"];
const newName = ["Dara", "Perng", "Kosal", "Somnang"];

// use call backk funtion
function myForEeach(cbf, arr) {
  for (let i = 0; i < names.length; i++) {
    cbf(arr[i], i, arr);
  }
}
myForEeach(function (item, i, array) {
  console.log(item, i, array);
}, names);

function eachName(item) {
  console.log(item)
}
const Name = newName.reverse();

names.forEach(eachName)
Name.forEach(eachName)

