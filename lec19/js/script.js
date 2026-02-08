const btn = document.querySelector(".load-posts");
const more = document.querySelector(".load-more");
const wrapper = document.querySelector(".posts-wrapper");

let skip = 0;

let url = "https://dummyjson.com/posts?limit=9";

btn.onclick = () => {
  loadPosts();
};

more.onclick = () => {
  skip += 9;
  loadPosts();
};

function loadPosts() {
  btn.querySelector("i").classList.remove("!hidden");
  btn.disabled = true;
  fetch(url + "&skip=" + skip)
    .then((res) => res.json())
    .then((res) => {
      btn.querySelector("i").classList.add("!hidden");
      btn.disabled = false;
      more.classList.remove("hidden");
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
    })
    .catch((err) => {
      console.error(err);
    });
}
