// 1. variable let and const
const name = 'kuddus ali';
// name = 'monsur ali'; // const variable has not assign ability
// console.log(name);
let phone = 'iphone 11pro';
phone = 'samsung 21ultra'; // let has assign ability
// console.log(phone);
// 2. default parameter
function add(num1, num2 = 0) {
  const result = num1 + num2;
  return result;
}
const total = add(12);
// console.log(total);
// 3. template string
const myNote = `I am ${name}. I buy a new phone that is ${phone}.`;
// console.log(myNote);
// 5. spread or three dots (...)
const array = [4, 6, 7, 8, 14, 1, 9, 10, 11, 12];

const max = Math.max(...array);
const min = Math.min(...array);
console.log(max, min);
