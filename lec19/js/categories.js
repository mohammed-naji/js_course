let url = "http://127.0.0.1:8000/api/categories";
const table = document.querySelector(".categories-table tbody");
const change_lang = document.querySelector(".change-lang");
let translatable = [];
change_lang.onclick = () => {
  if (document.documentElement.lang == "ar") {
    document.documentElement.lang = "en";
    document.body.style.direction = "ltr";
  } else {
    document.documentElement.lang = "ar";
    document.body.style.direction = "rtl";
  }
  loadCategories();

  changeLang();
};

loadCategories();

async function loadCategories() {
  table.innerHTML = "";
  let lang = document.documentElement.lang;

  let res = await fetch(url);
  res = await res.json();
  if (res) {
    res.forEach((el) => {
      let item = `<tr class="bg-neutral-primary border-b border-default">
            <td class="px-6 py-4">
              ${el.id}
            </td>
            <td class="px-6 py-4">
              <img width="80" src="${el.image}" alt="">
            </td>
            <td class="px-6 py-4">
              ${el.name[lang]}
            </td>
            <td class="px-6 py-4">
              <a href="" class="text-xs p-1 rounded-sm text-white bg-blue-500" >${lang == "ar" ? "تعديل" : "Edit"}</a>
              <a href="" class="text-xs p-1 rounded-sm text-white bg-red-500" >${lang == "ar" ? "حذف" : "Delete"}</a>
            </td>
          </tr>`;

      table.insertAdjacentHTML("beforeend", item);
    });
  }
}

function changeLang() {
  let lang = document.documentElement.lang;
  console.log(translatable);
  translatable.forEach((el) => {
    el.textContent = el.dataset[lang];
  });
}

// Add new Category
const btn = document.querySelector(".add-new");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");
const form = document.querySelector(".modal-content form");

const name_en = document.querySelector("[name=name_en]");
const name_ar = document.querySelector("[name=name_ar]");
const description_en = document.querySelector("[name=description_en]");
const description_ar = document.querySelector("[name=description_ar]");
const image = document.querySelector("[name=image]");

btn.onclick = () => modal.classList.remove("invisible", "opacity-0");
modal.onclick = () => modal.classList.add("invisible", "opacity-0");
modal_content.onclick = (e) => e.stopPropagation();

form.onsubmit = (e) => {
  e.preventDefault();

  let data = new FormData(form);

  console.log(data);
  // console.log(
  //   name_en.value,
  //   name_ar.value,
  //   description_en.value,
  //   description_ar.value,
  // );
};
