// const courses = [
//   {
//     name: "JS",
//     price: 100,
//   },
//   {
//     name: "Laravel",
//     price: 800,
//   },
//   {
//     name: "PHP",
//     price: 300,
//   },
// ];

// const checkDiscount = (courses) => {
//   let total = courses.reduce((acc, { price }) => (acc += price), 0);
//   // if (courses.length >= 5 || total >= 1000) return 0.2;
//   if (courses.length >= 5 && total >= 1000) return 0.2;
//   return 0;
// };

// console.log(checkDiscount(courses));
/*
let courses = [
  {
    PHP: 300,
  },
  {
    JS: 200,
  },
  {
    Python: 200,
  },
];

let total = 0;
courses.forEach((course) => {
  for (let key in course) {
    total += course[key];
  }
});

console.log(total);
*/
// for in

// let user = {
//   name: "Mohammed",
//   age: 31,
//   email: "moh@gmail.com",
// };

// for (let key in user) {
//   console.log(`Key ${key} : Value ${user[key]}`);
// }

const users = [
  {
    name: "Ahmed",
    year: 1994,
  },
  {
    name: "Tameem",
    email: "ddd@dd.cc",
    year: 2002,
  },
  {
    name: "Lama",
    email: "ddd@dd.cc",
    year: 2006,
  },
  {
    name: "Kawthar",
    email: "ddd@dd.cc",
    year: 1990,
  },
];

// const newUsers = users.filter(({ year }) => year >= 2000);
// const lastUsers = newUsers.map((user) => {
//   return {
//     ...user,
//     age: new Date().getFullYear() - user.year,
//   };
// });
// console.log(lastUsers);

// const newUsers = users
//   .filter(({ year }) => year < 2000)
//   .map((user) => ({ ...user, age: new Date().getFullYear() - user.year }));

// console.log(newUsers);

// console.log(
//   prompt("Enter any string:")
//     .trim()
//     .split(" ")
//     .filter((wd) => wd.length >= 10).length
// );

// BOM => Browser Object Model
// DOM => Document Object Model
// console.log(window.document);
// console.log(document);

// console.log(user);

// selector.event = action
// document.addEventListener("dblclick", handleClick);

// function handleClick() {
//   console.log("Doneeee");
// }

// document.addEventListener("dblclick", function () {
//   console.log("Doneeee");
// });

// document.onclick = function () {
//   console.log("Deeeeeeee");
// };

// document.onclick = (e) => {
//   console.log("Deeeeeeee", e);
// };

// var btn = document.getElementById("btn");
// let btns = document.getElementsByTagName("button");
// let btns = document.querySelectorAll("button");
// console.log(btns);

let buttons = document.getElementsByTagName("button");
// console.log(buttons);
buttons.forEach((el) => {
  el.onclick = () => {
    let txt = el.textContent;
    alert("Welcome " + txt);
  };
});
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     let txt = buttons[i].textContent;
//     alert("Welcome " + txt);
//   });
// }
// buttons[0].addEventListener("click", function () {
//   let txt = buttons[0].textContent;
//   alert("Welcome " + txt);
// });
// buttons[1].addEventListener("click", function () {
//   let txt = buttons[1].textContent;
//   alert("Welcome " + txt);
// });
// buttons[2].addEventListener("click", function () {
//   let txt = buttons[2].textContent;
//   alert("Welcome " + txt);
// });
// buttons[3].addEventListener("click", function () {
//   let txt = buttons[3].textContent;
//   alert("Welcome " + txt);
// });
