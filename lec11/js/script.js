// window.addEventListener('DOMContentLoaded', () => {

// })

const loading = document.querySelector(".loading");

window.onload = () => {
  // loading.classList.add(["opacity-0", "invisible"]);
  let classes = loading.getAttribute("class") + " opacity-0 invisible";
  loading.setAttribute("class", classes);
  // console.log(classes);
};

let users = JSON.parse(localStorage.getItem("users"));

if (users.length == 0) {
  users = [
    {
      id: 1,
      name: "Ali Ahmed",
      image:
        "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    },
    {
      id: 2,
      name: "Manal Kamel",
      image:
        "https://static.vecteezy.com/system/resources/previews/019/896/012/non_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
    },
    {
      id: 3,
      name: "Sawsan Badr",
      image:
        "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
    },
    {
      id: 4,
      name: "Madiha Kamel",
      image:
        "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
    },
    {
      id: 5,
      name: "Abla Kamel",
      image:
        "https://static.vecteezy.com/system/resources/previews/019/896/012/non_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
    },
    {
      id: 6,
      name: "Mohammed ali",
      image:
        "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    },
  ];
}

console.log(users);
const wrapper = document.querySelector(".user-wrapper");

generateUsers();

function generateUsers() {
  wrapper.innerHTML = "";
  users.forEach(({ id, image, name }) => {
    let item = `<div class="relative group">
      <img class="w-[72%] mx-auto mb-3"
        src="${image}"
        alt="">
      <h2 class="text-2xl font-bold">${name}</h2>
      <button
        onclick="deleteUser(${id})"
        class="bg-red-500/50 text-white text-xs p-0.5 px-1 duration-300 hover:bg-red-500 cursor-pointer absolute top-0 opacity-0 right-5 group-hover:opacity-100"><i
          class="fas fa-trash"></i></button>
    </div>`;
    wrapper.insertAdjacentHTML("beforeend", item);
  });
}

function deleteUser(id) {
  users = users.filter((user) => user.id != id);
  localStorage.setItem("users", JSON.stringify(users));
  generateUsers();
}
