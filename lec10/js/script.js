const btn_top = document.querySelector(".back-top");
window.onscroll = () => {
  if (window.scrollY > 200) {
    btn_top.classList.add("show");
  } else {
    btn_top.classList.remove("show");
  }
};

btn_top.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
