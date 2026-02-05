// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 1000);
// console.log("C");

// let done = true;
// new Promise((res, rej) => {
//   if (done) {
//     res("Success");
//   } else {
//     rej("Fail");
//   }
// })
//   .then((res) => {
//     console.log("This message is " + res);
//   })
//   .catch((err) => {
//     console.error("This message is " + err);
//   });

// AJAX

const btn = document.querySelector(".load-posts");
const wrapper = document.querySelector(".posts-wrapper");

// let limit = 9;
let skip = 0;

let url = "https://dummyjson.com/posts?limit=9";

btn.onclick = () => {
  loadPosts();
};

function loadPosts() {
  btn.querySelector("i").classList.remove("!hidden");
  btn.disabled = true;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      btn.querySelector("i").classList.add("!hidden");
      btn.disabled = false;
      res.posts.forEach((el) => {
        let tags = "";
        el.tags.forEach((el) => {
          tags += `<span class="text-sm bg-gray-100 p-1 py-0.5 rounded">#${el}</span>`;
        });

        let item = `<div class="bg-white shadow rounded p-6 relative">
        <span class="text-sm bg-teal-200  px-2 absolute top-0 right-0"><i class="far fa-eye text-xs"></i>
          ${el.views}</span>
        <h2 class="font-semibold text-xl mb-4 truncate">${el.title}</h2>
        <p class="mb-4">${el.body.substr(0, 20)}...</p>

        <div class="flex justify-between">
          <div class="flex gap-3">
            <span><i class="far fa-thumbs-up"></i> ${el.reactions.likes}</span>
            <span><i class="far fa-thumbs-down"></i> ${el.reactions.dislikes}</span>
          </div>
          ${tags}
          <div>
            
          </div>
        </div>
      </div>`;

        wrapper.insertAdjacentHTML("beforeend", item);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

//1. XMLHttpRequest
// // Create an XMLHttpRequest object
// const xhttp = new XMLHttpRequest();
// // Define a callback function
// xhttp.onload = function () {
//   // Here you can use the Data
//   console.log(JSON.parse(this.responseText));
// };
// // Send a request
// xhttp.open("GET", url);
// xhttp.send();
//2. jQuery
// $.get({
//   url: url,
//   // method: "GET",
//   success: function (res) {
//     console.log(res);
//   },
//   error: function (err) {
//     console.log(err);
//   },
// });
//3. fetch
// fetch(url)
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//4. axios
// axios
//   .get(url)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// AJAX;
// fetch, axios
// XMLHttpRequest
// jquery ajax
// fetch
// axios

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log(1);
//     res();
//   }, 1000);
// }).then(() => {
//   setTimeout(() => {
//     console.log(2);
//   }, 1000);
// });

// 6 * 5 * 4 * 3 * 2 * 1;

// function fact(num) {
//   let sum = 1;
//   for (let i = num; i > 0; i--) {
//     sum *= i;
//   }

//   return sum;
// }

// function fact(num) {
//   if (num <= 1) return 1;
//   return num * fact(num - 1);
// }

// console.log(fact(5));
