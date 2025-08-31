const names = ["dara", "dok", "Chena", "sokna"];
const oldNames = ["Tokla", "Pheakdey", "Dollar"];
// reverse() ផ្ទុយ
const result = names.reverse();
console.log("Reverse:", result);
// concat()​ + array ខាងក្រោយ
console.log([...names, ...oldNames]);
console.log("Concat", names.concat(["gg"]));
// unshift() add array beginnning element
names.unshift("AA");
console.log("Unshift", names);
// Push
names.push("BB");
console.log("Push", names);
// shift() ដកខាងដើម
names.shift();
console.log("Shift", names);
// slice() រាប់ពី index ណាដែលយើងបានដាក់គឺទុក ខាងក្រោយវាគឺលុប
names.slice(1);
console.log("Slice", names);
