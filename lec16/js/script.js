const headers = document.querySelectorAll(".accordion .header");
const accordion = document.querySelector(".accordion");

headers.forEach((el) => {
  el.onclick = () => {
    // if (accordion.dataset.collapse == "collapse") {
    //   document
    //     .querySelector(".accordion .content.block")
    //     .classList.replace("block", "hidden");

    //   document
    //     .querySelector(".accordion .header i.rotate-180")
    //     .classList.remove("rotate-180");
    // }

    el.querySelector("i").classList.add("rotate-180");
    el.nextElementSibling.classList.replace("max-h-0", "max-h-96");
  };
});

// Typing Effect
const p = document.querySelector(".typing");
const text = p.innerText;
p.textContent = "";
let i = 0;

let timer = setInterval(() => {
  p.textContent += text[i++];
  if (!text[i]) clearInterval(timer);
}, 100);
// console.log(p, text);

// Search Filter
let products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  },
  {
    id: 3,
    title: "Powder Canister",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  },
  {
    id: 4,
    title: "Red Lipstick",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
  {
    id: 5,
    title: "Red Nail Polish",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
  },
  {
    id: 8,
    title: "Dior J'adore",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
  },
];

function renderProducts(products) {
  const wrapper = document.querySelector(".products-wrapper");
  wrapper.innerHTML = "";
  products.forEach(({ title, image }) => {
    let item = `<div class="bg-white shadow rounded">
            <img src="${image}" alt="">
            <h2 class="p-2 text-center">${title}</h2>
          </div>`;
    wrapper.insertAdjacentHTML("beforeend", item);
  });
}

renderProducts(products);

const input = document.querySelector("#input-search");
input.onkeyup = () => {
  let filtered = products.filter((el) =>
    el.title.toLowerCase().includes(input.value.toLowerCase()),
  );

  renderProducts(filtered);
};

input.onpaste = () => {
  let filtered = products.filter((el) =>
    el.title.toLowerCase().includes(input.value.toLowerCase()),
  );

  renderProducts(filtered);
};
