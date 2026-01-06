// // const calcAge = ({age}) => {
// //   if (user.age) {
// //     return user.age * 365;
// //   }

// //   return null;
// // };

// // let user = {
// //   name: "Mohammed",
// //   age: Number(prompt("Enter your age")),
// // };

// // console.log(calcAge(user) ?? "User done have age");

// const calc = (n1, n2, o) => {
//   n1 = Number(n1);
//   n2 = Number(n2);
//   if (isNaN(n1) || isNaN(n2)) return null;

//   let res = 0;
//   switch (o) {
//     case "+":
//       res = n1 + n2;
//       break;

//     case "-":
//       res = n1 - n2;
//       break;

//     case "*":
//       res = n1 * n2;
//       break;

//     case "/":
//       res = n1 / n2;
//       break;
//     default:
//       res = "Invalid Operations";
//   }

//   return res;
// };

// let exp = prompt("Enter Num1, Num2, Operator");
// // console.log();
// // let num1 = exp.split(",")[0];
// // let num2 = exp.split(",")[1];
// // let op = exp.split(",")[2];

// let [num1, num2, op] = exp.split(",");

// console.log(calc(num1, num2, op) ?? "Invalid Number");

// // let user = {
// //   name: "Mohammed",
// //   email: "moh@gmail.com",
// // };

// // console.log(user.name);

// // let { name, email } = user;

// // console.log(name);

// let user = {
//   name: "Mohamed",
//   age: 31,
// };

// function User(name, age = 0) {
//   this.name = name;
//   this.age = age;
// }

// let u1 = new User("Zina", 4);
// let u2 = new User("Sama", 3);

// let u1 = {
//   name: "Zina",
//   age: 4,
// };
// let u2 = {
//   name: "Sama",
//   age: 3,
// };

// console.log(u1, u2);

// console.log(Date());
// console.log(new Date());
// unset
// unlink

// let user = {
//   name: "Amal",
//   age: 2,
// };

// delete user.age;
// user.age = null;

// console.log(user);

let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getUTCHours());
// let clock = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// console.log(clock);

// setTimeout(() => {
//   console.log("setTimeout Run");
// }, 1000);

// setInterval(() => {
//   document.getElementsByTagName(
//     "p"
//   )[0].innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
// }, 1000);

// console.log(document.getElementsByTagName("p")[0]);
// let x = 10;
// let counter = setInterval(() => {
//   console.log(x);
//   x--;
//   if (x == 0) clearInterval(counter);
// }, 1000);

// setTimeout(() => {
//   clearInterval(counter);
// }, 10000);

const calcAgeInDays = (dob) => {
  let [day, month, year] = dob.split("-");
  let date = new Date();

  let ageYears = date.getFullYear() - year;
  let ageMonths = date.getMonth() - (month - 1);
  let ageDays = date.getDate() - day;

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    ageMonths--;
    ageDays += 30;
  }

  console.log("Your age in years " + ageYears);
  console.log("Your age in months " + ageMonths);
  console.log("Your age in days " + ageDays);
};

calcAgeInDays("4-6-1994");
