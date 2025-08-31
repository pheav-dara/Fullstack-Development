let num = 2.5;
// Math.floor() បង្គត់ចុះ
// Math.ceil() បង្គត់ឡើង
// Math.round() បង្គត់លេខ
// Math.max()
// Math.min()
let number = [1, 2, 3, 4, 10];
console.log(Math.max(...number));

function getRandomNumber(n) {
  return Math.floor(Math.random() * 10); // 0 to 9
}
console.log(getRandomNumber());
