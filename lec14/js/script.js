// change theme
const change = document.querySelector(".change-theme");
const wrapper = document.querySelector(".wrapper");

change.onclick = () => {
  wrapper.classList.toggle("bottom-[-106px]");
  wrapper.classList.toggle("bottom-0");
};

wrapper.onclick = (e) => {
  let color = e.target.dataset.color;

  if (!color) return;

  document.documentElement.style.setProperty("--main-color", color);
};

// calculate ascii
const form = document.querySelector("form");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const res = document.querySelector(".res");

form.onsubmit = (e) => {
  e.preventDefault();

  let sum1 = name1.value
    .split("")
    .reduce((acc, cur) => (acc += cur.charCodeAt(0)), 0);
  let sum2 = name2.value
    .split("")
    .reduce((acc, cur) => (acc += cur.charCodeAt(0)), 0);

  if (sum1 > sum2) {
    res.innerHTML = `<b class="text-green-700">${name1.value} - ${sum1}</b> is greater than <b class="text-red-700">${name2.value} - ${sum2}</b>`;
  } else if (sum1 < sum2) {
    res.innerHTML = `<b class="text-green-700">${name2.value} - ${sum2}</b> is greater than <b class="text-red-700">${name1.value} - ${sum1}</b>`;
  } else {
    res.innerHTML = `<b class="text-green-700">${name1.value} - ${sum1}</b> equal to <b class="text-green-700">${name2.value} - ${sum2}</b>`;
  }
};

// Tabs
const btns = document.querySelectorAll(".tab-wrapper button");
btns.forEach((el) => {
  el.onclick = () => {
    // change button active color
    document
      .querySelector(".tab-wrapper button.bg-teal-300")
      .classList.replace("bg-teal-300", "bg-gray-100");
    el.classList.replace("bg-gray-100", "bg-teal-300");

    // show the selected tab
    document
      .querySelector(".tab-wrapper div.block")
      .classList.replace("block", "hidden");
    document.querySelector(el.dataset.tab).classList.replace("hidden", "block");
  };
});
