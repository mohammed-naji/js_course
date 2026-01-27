let users = [
  "أحمد",
  "عبد الرحمن",
  "معروف",
  "أيمن",
  "تسنيم",
  "نزار",
  "لانا",
  "أدم",
  "تالة",
  "براءة",
  "محمد",
  "القبط",
  "دانا",
  "وفاء",
  "أمير",
  "إسلام",
  "أسيل",
];

const shuffled = users.sort(() => Math.random() - 0.5);

const groups = [];
for (let i = 0; i < shuffled.length; i += 3) {
  groups.push(shuffled.slice(i, i + 3));
}

const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
const sound = document.querySelector("#sound");

btn.onclick = () => {
  let item = `<div class="bg-amber-100 p-4 min-h-[170px] flex justify-center items-center rounded text-2xl text-center shadow-amber-600/15 shadow item-0">
        <img width="150" class="mx-auto" src="images/1f941.gif" alt="">
        <p class="hidden">${groups[0]}</p>
      </div>`;
  wrapper.insertAdjacentHTML("beforeend", item);
  showNames("item-0");
  sound.play();
  let i = 1;
  let class_name = "";
  let timer = setInterval(() => {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
    class_name = `item-${i}`;
    let item = `<div class="bg-amber-100 p-4 min-h-[170px] flex justify-center items-center rounded text-2xl text-center shadow-amber-600/15 shadow ${class_name}">
        <img width="150" class="mx-auto" src="images/1f941.gif" alt="">
        <p class="hidden">${groups[i]}</p>
      </div>`;
    wrapper.insertAdjacentHTML("beforeend", item);
    showNames(class_name);
    i++;
    if (i == 6) clearInterval(timer);
  }, 5300);
};

function showNames(class_name) {
  setTimeout(() => {
    document.querySelector(`.${class_name} img`).remove();
    document.querySelector(`.${class_name} p`).classList.remove("hidden");
  }, 5300);
}
