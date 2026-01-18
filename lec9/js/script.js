const btn = document.querySelector(".toggle-dark");
const theme = localStorage.getItem("mood") ?? "";
// console.log(document.body);
if (theme && theme == "dark") {
  document.body.classList.add("dark");
  btn.querySelector("i").classList.remove("fa-moon");
  btn.querySelector("i").classList.add("fa-sun");
}
btn.onclick = (e) => {
  e.preventDefault();

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mood", "light");
    document.body.classList.remove("dark");
    btn.querySelector("i").classList.add("fa-moon");
    btn.querySelector("i").classList.remove("fa-sun");
  } else {
    localStorage.setItem("mood", "dark");
    document.body.classList.add("dark");
    btn.querySelector("i").classList.remove("fa-moon");
    btn.querySelector("i").classList.add("fa-sun");
  }
};

// btn.onclick = (e) => document.body.classList.toggle("dark");

// Get name from user
// let users = prompt("Enter users separated by , eg: moh,ali").split(",");
// const wrapper = document.querySelector(".user-wrapper");
// const classes = ["a", "b", "c", "d", "e", "f", "g"];
// users.forEach((user) => {
//   wrapper.innerHTML += `<span class="${
//     classes[Math.floor(Math.random() * classes.length)]
//   }">${user}</span>`;
// });

// Copy Text
const elements = document.querySelectorAll(".copy-wrapper i");
// console.log(elements);
elements.forEach((el) => {
  el.onclick = () => {
    el.classList.remove("fa-copy");
    el.classList.add("fa-check");
    let txt = el.previousElementSibling.textContent;
    navigator.clipboard.writeText(txt);
    // console.log(el.previousElementSibling.textContent);
    // console.log(el.closest(".container"));
    setTimeout(() => {
      el.classList.add("fa-copy");
      el.classList.remove("fa-check");
    }, 2000);
  };
});

const share = document.querySelector(".share-this");
let text = "";
window.onmouseup = () => {
  const selection = window.getSelection();
  const selectedText = selection.toString().trim();
  if (!selectedText) return;

  text = selectedText;
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  share.style.display = "block";
  share.style.top = `${window.scrollY + rect.top - 2}px`;
  share.style.left = `${rect.left + rect.width / 2}px`;
  // console.log(rect.top, window.scrollY);
};

share.querySelectorAll("i").forEach((el) => {
  el.onclick = () => {
    if (el.classList.contains("fb")) {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href,
        "blank"
      );
    } else if (el.classList.contains("x")) {
      window.open("https://twitter.com/intent/tweet?text=" + text, "blank");
    } else {
      window.open("https://wa.me/00972598721575", "blank");
    }
  };
});
