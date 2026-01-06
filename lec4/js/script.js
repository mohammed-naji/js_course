let x = 2;
let y = 5;

// console.log(sum(x, y) * 2);

// x + ++x

// function sum(x, y) {
//   // console.log(x + y);
//   return x + y;
// }

// 1. Function Parameter
// 2. Function Expression
// 3. Arrow Function

// document.addEventListener("click", sum(x, y));

function sum(x, y) {
  console.log(x + y);
}

// function () {
//   console.log("Code Run");
// }

// document.addEventListener("click", function () {
//   // console.log("Code Run");
//   sum(x, y);
// });
// let sum = function (x, y) {
//   return x + y;
// };

// let sum = (x, y) => x + y;
// let sum = (x, y) => {
//   return x + y;
// };

// console.log(sum(x, y));

// document.addEventListener("click", (event) => {
//   // console.log("Code Run");
//   console.log(event);
//   // sum(x, y);
// });

// const handelSubmit = (e) => {
//   e.preventDefault();

//   alert("DDDD");
// };

// function handelSubmit(e) {
//   e.preventDefault();
// }

// // document.querySelector("form").onsubmit = (e) => {
// //   e.preventDefault();
// // };

// e.stopPropagation();

// function sum(x, y) {}

// const sum = function (x, y) {};

// const sum = (x, y) => {};

// let friends = ["Ali", "Ahmed", "Khalid"];

// let user = {
//   name: "Mohammed Naji",
//   age: 31,
//   email: "moh@gmail.com",
//   "my fav color": "Black",
//   info: function () {
//     return this.name + " |||||| " + this.age;
//   },
// };

// console.log(user.info());

// let ch = "name";

// console.log(user["my fav color"]);

const course = {
  name: "JS",
  hours: 40,
  _price: 500,
  instructor: {
    name: "Mohammed",
    email: "moh@gmail.com",
  },
};

let copy = course;
copy.name = "dd";

console.log(course);
