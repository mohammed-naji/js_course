const header = document.querySelector("header");
const hero = document.querySelector(".hero");

window.onscroll = () => {
  if (window.scrollY >= hero.clientHeight + header.clientHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

// Generate input in form
const generate = document.querySelector(".generate");
const required = document.querySelector("#required");
const type = document.querySelector("#type");
const name = document.querySelector("#name");
const label = document.querySelector("#label");
const placeholder = document.querySelector("#placeholder");
const wrapper = document.querySelector(".fields-wrapper");

generate.onclick = () => {
  if (name.value.length == 0) {
    alert("Name is required");
    return;
  }

  let item = `<div class="wrapper">
              <label for="${name.value}">${label.value}</label>
              <input type="${type.value}" id="${name.value}" name="${name.value}" placeholder="${placeholder.value}" class="border p-2 rounded w-full ${required.checked ? "required" : ""}" >
            </div>`;

  wrapper.insertAdjacentHTML("beforeend", item);
};

const form = document.querySelector(".generated-form");
form.onsubmit = (e) => {
  form.querySelectorAll(".required").forEach((el) => {
    if (el.value.length == 0) {
      e.preventDefault();
      el.classList.add("border-red-500");
    } else {
      el.classList.remove("border-red-500");
    }
  });
};

wrapper.ondblclick = (e) => {
  if (
    e.target.classList.contains("wrapper") ||
    e.target.closest("div").classList.contains("wrapper")
  ) {
    e.target.closest("div").remove();
  }
};
// const links = document.querySelectorAll(".menu a");
// links.forEach((li) => {
//   li.onclick = (e) => {
//     e.preventDefault();
//     let id = li.href.split("#")[1];
//     console.log(document.querySelector("#" + id).getBoundingClientRect().top);
//     window.scrollTo({
//       top: document.querySelector("#" + id).getBoundingClientRect().top,
//       behavior: "smooth",
//     });
//   };
// });

// Modal Toggle
const modal_btn = document.querySelector(".modal-open");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");

modal_btn.onclick = () => {
  modal.classList.remove("opacity-0", "invisible");
  modal.classList.add("open");
  document.body.classList.add("overflow-hidden");
};

modal.onclick = () => {
  modal.classList.add("opacity-0", "invisible");
  document.body.classList.remove("overflow-hidden");
};

modal_content.onclick = (e) => e.stopPropagation();

document.onkeyup = (e) => {
  console.log(e);
  if (e.keyCode == 27) {
    document
      .querySelector(".modal.open")
      .classList.add("opacity-0", "invisible");
    // modal.classList;
    document.body.classList.remove("overflow-hidden");
  }
};

window.addEventListener("keydown", function (event) {
  if ((event.ctrlKey || event.metaKey) && event.key === "k") {
    event.preventDefault();
    modal.classList.remove("opacity-0", "invisible");
    modal.classList.add("open");
    document.body.classList.add("overflow-hidden");
    // openModal();
  }
});
