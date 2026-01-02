// if(cond) {

// }else {

// }

// cond ? true : false ;

// let sponsored = "Mohammed";
// // if (sponsored) {
// //   console.log("This orphan is sponsored");
// // } else {
// //   console.log("Sponsor this orphan");
// // }
// // console.log(sponsored ? "This orphan is sponsored" : "Sponsor this orphan");
// // console.log(sponsored && "This orphan is sponsored");
// // {cond && ""}
// console.log(sponsored ?? "This sss");

// let _name = "Mohammed";
// console.log([..._name]);
// console.log();

// function avg(...marks) {
//   return "dddd";
// }

// avg(100, 30, 80, 40, 80, 70);

// let marks = [40, 50, 60, 30];
// let comp_marks = [52, 34, ...marks];
// console.log(comp_marks);

// [
//   'ddd' => 55,
//   'er' => 32
// ]
// leetcode;
// let num = Number(prompt("Enter the number:"));
// console.log((num - Math.floor(num)).toFixed(3));
// console.log(num % 1);
// let numArr = String(num).split(".");
// console.log(numArr[1]);
// console.log(1 - (Math.ceil(num) - num));
// let num = 2.91;
// console.log(Math.round(num));
// console.log(Math.ceil(Math.random() * 10));

// let x = 10; // 13
// let y = 5; // 6
// 10  +  18 = 28
// console.log(x++ + ++y * 3);
// 10 + 11  + 13 = 34
// 10 + 10 + 11 + 13
// console.log(x + x++ + x++ + ++x);
// x += 3;
// console.log(x, y);

// normal function
// arrow function

// call by value , call by reference
// printName;
// document.addEventListener("click", printName);

// printName("Zina");

// function printName(_name) {
//   console.log(_name);
// }

// let x = 10;

// function double(x) {
//   x = x * 2;
//   console.log(x);
// }
// double(x);
// console.log(x);

// let user = {
//   name: "Mohammed",
//   age: 32,
// };

// function fullName(user) {
//   user.name = user.name + Math.random();
//   console.log(user.name);
// }

// fullName(user);
// console.log(user.name);

// let user = {
//   name: "Mohammed",
//   age: 32,
// };

// function fullName(user) {
//   user = user + Math.random();
//   console.log(user);
// }

// let name = user.name;

// fullName(name);
// console.log(user);

// price = 140;
// p = 15;
// 140 * (15 / 100) = 140 + 21;

function vat(price, p) {
  return price + price * (p / 100);
}

console.log("You must pay " + vat(140, 15));
