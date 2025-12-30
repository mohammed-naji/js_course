// alert("Welcome");
// confirm("Are you sure?");
// let name = prompt("Enter your name");
// console.log(name);

// let _name = null;
// string
// number
// Boolean
// null
// undefined
// object
// Symbol
// BigInt

// console.log(typeof _name);

// let age = true;
// console.log(typeof age);
// let _name = "Mohammed";
// if (_name) {
// }

// falsy value
// false
// 0
// ""
// null
// undefined
// truthy value
// true
// 1
// "dddd"
// let _name = "Mohammed";
// let _age = 31;
// console.log("Welcome " + _name + ",your age is " + _age);
// console.log(`Welcome ${_name},your age is ${_age}`);

// let content = "<ul><li>home</li> <li>home</li><li>home</li> <li>home</li></ul>";
// let content = "<ul>";
// content += "<li>home</li>";
// content += "<li>home</li>";
// content += "<li>" + _name + "</li>";
// content += "<li>home</li>";
// content += "</ul>";

// let content = `<ul>
//     <li>home</li>
//     <li>home</li>
//     <li>home</li>
//     <li>home</li>
//   </ul>`;

// if (condition) {
// true statement
// }

// let age = 10;
// if (age > 20) {
//   console.log("Your age is " + age);
// } else {
//   console.log("انت لسا صغير اخوي");
// }

// let age = prompt("Enter your age:");
// if (age > 0 && age < 120) {
//   if (age <= 18) {
//     console.log("انت لسا طفل استمستع بحياتك");
//   } else if (age > 18 && age < 60) {
//     console.log("انت في مرحلة الشباب الله يعينك على حالك");
//   } else {
//     console.log("لماااذا نحن هنااااا تذكرة على السعودية بس على الكعبة هاااا!");
//   }
// } else {
//   console.log("العمر مش صح ي فيلسووووف");
// }

// let ch = prompt("Enter any number between 1 and 5");
// // console.log(typeof Number(ch));
// // console.log(typeof parseInt(ch));
// switch (Number(ch)) {
//   case 1:
//     console.log("Question No 1");
//     break;
//   case 2:
//     console.log("Question No 2");
//     break;
//   case 3:
//     console.log("Question No 3");
//     break;
//   case 4:
//     console.log("Question No 4");
//     break;
//   case 5:
//     console.log("Question No 5");
//     break;
//   default:
//     console.log("No Question Found");
// }

// let _name = "Mohammedddddd";
// // console.log(_name.length);
// if (_name.length <= 10) {
//   console.log("Accepted Name");
// } else {
//   console.log("Invalid Name");
// }

// console.log(10 === "10");

// let email = "moh@gmail.coM";
// let inputEmail = "Moh@Gmail.Com";
// if (email.toLocaleLowerCase() == inputEmail.toLocaleLowerCase()) {
//   console.log("Welcome to your dashboard");
// } else {
//   console.log("Email not match");
// }

// console.log(myname);

// let url = window.location.href;
// console.log(url.includes("lec2"));
// console.log(url.indexOf("lec2ddd"));

// document.oncopy = () => {
//   alert("أخوي بلاش تنسخ!!");
//   return false;
// };
// sit amet, consectetur
// sit amet, consectetur

// document.onselectstart = () => {
//   return false;
// };

document.oncopy = () => {
  let url = window.location.href;
  let txt = document.getSelection().toString();
  let fullText = txt + "\n\nFor more info visit: " + url;
  navigator.clipboard.writeText(fullText);
  return false;
};
