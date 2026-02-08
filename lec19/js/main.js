const wrapper = document.querySelector(".posts-wrapper");
const loading = document.querySelector(".loading");

let skip = 0;
let url = "https://dummyjson.com/posts?limit=15";
let isLoading = false;

loadPosts();

async function loadPosts() {
  loading.classList.remove("hidden");
  try {
    let res = await fetch(url + "&skip=" + skip);
    res = await res.json();
    if (res.posts) {
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
      isLoading = false;
      loading.classList.add("hidden");
    }
  } catch (error) {
    console.log(error);
  }
}

window.onload = () => {
  window.onscroll = () => {
    setTimeout(() => {
      let top = window.scrollY + document.documentElement.clientHeight;
      let pageHeight = document.documentElement.scrollHeight - 100;

      if (isLoading) return;

      if (top >= pageHeight) {
        isLoading = true;
        skip += 15;
        loadPosts();
      }
    }, 200);
    // console.log(
    //   window.scrollY,
    //   document.documentElement.clientHeight,
    //   window.scrollY + document.documentElement.clientHeight,
    //   document.documentElement.scrollHeight - 100,
    // );
  };
};
