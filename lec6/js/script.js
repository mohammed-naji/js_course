// let u1 = {
//   name: "Zina",
//   dob: "2021-5-3",
// };

// let u2 = {
//   name: "Sama",
//   dob: "2021-5-3",
// };

// const calcOlder = (u1, u2) => {
//   let date1 = new Date(u1.dob).getTime();
//   let date2 = new Date(u2.dob).getTime();

//   if (date1 < date2) return `${u1.name} Older Than ${u2.name}`;
//   if (date2 < date1) return `${u2.name} Older Than ${u1.name}`;
//   if (date1 == date2) return `${u1.name} Same age with ${u2.name}`;

//   return null;
// };

// console.log(calcOlder(u1, u2) ?? "Invalid Date");

// function Course(name, instructor, hours, price, discount = 0) {
//   this.name = name;
//   this.instructor = instructor;
//   this.hours = hours;
//   this.price = price;
//   this.discount = discount;
//   this.finalPrice = () => {
//     if (this.discount >= 0 && this.discount <= 100)
//       return this.price - this.price * (this.discount / 100);

//     return this.price;
//   };
// }

// // const finalPrice = (course) => {

// // }

// const js = new Course("JS", "Mohammed", 40, 500);
// const php = new Course("PHP", "Amal", 80, 120, 15);
// console.log(js.finalPrice(), php.finalPrice());

// const questions = {
//   1: "Whats your name?",
//   2: "Whats your age?",
//   3: "Whats your best club?",
//   4: "Whats your best plyer?",
// };

// const timer = setInterval(() => {
//   let index = Math.ceil(Math.random() * 5);
//   if (index == 5) {
//     console.log("Game Over");
//     clearInterval(timer);
//     return;
//   }
//   console.log(questions[index]);
// }, 2000);

// let cars = ["BMW", "Mercedes", "Opel", "Ford"];
// console.log(cars[2]);
// pop , push
// shift, unshift

// cars.push("Ferari"); // add to the end of array
// console.log(cars.pop());
// console.log(cars.push("dd"));

// cars.unshift("404");
// cars.shift();
// console.log(cars);

// document.getElementsByTagName("p")[0].innerHTML = cars;

// [
//   {
//     dd: "eee"
//   }
// ]
let cars = ["BMW", "Mercedes", "Opel", "Ford"];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// let i = 0;
// while (i != 4) {
//   console.log(cars[i]);
//   i = Math.floor(Math.random() * 4);
// }

//   do {

//   }

// Higher Order Functions
// forEach, map, filter
// function printhi() {
//   console.log("Hi");
// }

// function runCode(fun) {
//   fun();
// }

// runCode(printhi);

// let tmp = cars.forEach((el) => console.log(el));
// console.log(tmp);
// let tmp = [];
// cars.forEach((el) => tmp.push(el.toLowerCase()));
// let tmp = cars.map((el) => el.toLowerCase());

// console.log(cars, tmp);
// let numbers = [45, 21, 2, 7, 8];
// let sum = 0;
// numbers.forEach((num) => (sum += num));
// let sum = numbers.reduce((acc, curr) => (acc *= curr), 1);
// console.log(sum);

// let even = [];
// numbers.forEach((num) => {
//   if (num % 2 == 0) {
//     even.push(num);
//   }
// });

// let even = numbers.filter((num) => num % 2 == 0);

// console.log(numbers, even);
