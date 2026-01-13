// const btn = document.querySelector("button");
// const div1 = document.querySelector("#div1");
// const div2 = document.querySelector("#div2");

// const colors = ["red", "blue", "pink", "black", "orange", "yellow", "violet"];

// const getRandomColor = () => {
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// // console.log(getRandomColor());

// btn.onclick = () => {
//   let clr1 = getRandomColor();
//   let clr2 = getRandomColor();
//   div1.style.backgroundColor = clr1;
//   div2.style.backgroundColor = clr2;

//   if (clr1 === clr2) {
//     btn.disabled = true;
//     // btn.setAttribute("disabled", "disabled");
//   }
// };
// const h = document.querySelector("h1");

// const getWindowSize = () => {
//   h.textContent = `${window.innerWidth}px / ${Math.floor(
//     window.innerWidth / 16
//   )}em`;
// };

// window.onload = () => getWindowSize();
// window.onresize = () => getWindowSize();
// const sp = document.querySelector("p span");
// const btn = document.querySelector("button");
// let seconds = Number(sp.textContent);
// let timer = setInterval(() => {
//   seconds--;
//   sp.textContent = seconds;
//   if (seconds <= 0) {
//     btn.disabled = false;
//     clearInterval(timer);
//   }
// }, 1000);

// setTimeout(() => {
//   console.log("Download");
// }, seconds * 1000);

// Textarea Counter
// const txt = document.querySelector(".text-container textarea");
// const sp = document.querySelector(".text-container span");

// txt.onkeyup = () => {
//   sp.textContent = txt.value.length;
//   if (txt.value.length >= 50) {
//     let mainstr = txt.value.substr(0, 49);
//     let extrastr = txt.value.substr(50);
//     let fulltxt = `${mainstr}<span>${extrastr}</span>`;
//     // console.log(mainstr, extrastr);
//     // txt.value = fulltxt;
//     sp.style.color = "red";
//   }
// };

const txt = document.querySelector(".text-container .textarea");
const sp = document.querySelector(".text-container span");

txt.onkeyup = () => {
  let content = txt.textContent;
  sp.textContent = content.length;
  const text = txt.innerText;

  if (content.length >= 50) {
    let mainstr = text.substr(0, 50);
    let extrastr = text.substr(50);
    txt.innerHTML = `${mainstr}<span>${extrastr}</span>`;

    // نحرك المؤشر لنهاية النص
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(txt);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);

    // let mainstr = content.substr(0, 49);
    // let extrastr = content.substr(50);
    // let fulltxt = `${mainstr}<span>${extrastr}</span>`;

    // txt.innerHTML = fulltxt;
    // const range = document.createRange();
    // const sel = window.getSelection();
    // range.selectNodeContents(txt);
    // range.collapse(false);
    // sel.removeAllRanges();
    // sel.addRange(range);
    // let lastletter = content.substr(-1);
    // console.log(lastletter);
    // txt.innerHTML += `<span>${lastletter}</span>`;
    // txt.insertAdjacentElement(txt, fulltxt);
    sp.style.color = "red";
  } else {
    sp.style.color = "black";
  }
};

// const max = 50;

// txt.addEventListener("input", () => {
//   const text = txt.innerText; // أفضل من textContent هنا
//   sp.textContent = text.length;

//   if (text.length <= max) {
//     sp.style.color = "black";
//     return;
//   }

//   sp.style.color = "red";

//   const main = text.slice(0, max);
//   const extra = text.slice(max);

//   // حفظ مكان المؤشر
//   const selection = window.getSelection();
//   const range = selection.getRangeAt(0);
//   const cursorPos = range.startOffset;

//   // إعادة بناء المحتوى
//   txt.innerHTML = `${main}<span class="extra">${extra}</span>`;

//   // إعادة المؤشر
//   const newRange = document.createRange();
//   const textNode = txt.childNodes[0];
//   newRange.setStart(textNode, Math.min(cursorPos, textNode.length));
//   newRange.collapse(true);

//   selection.removeAllRanges();
//   selection.addRange(newRange);
// });
