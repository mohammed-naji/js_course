const progress = document.querySelector(".progress");
window.onscroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  progress.style.width = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`;
};

document.body.onclick = (e) => {
  if (e.target.classList.contains("delete")) {
    let id = e.target.dataset.id;
    console.log("you will delete the id : " + id);
  }
};

// const tds = document.querySelectorAll("table td");
// tds.forEach((td) => {
//   td.ondblclick = () => {
//     td.contentEditable = true;
//     td.focus();
//   };
//   td.onblur = () => {
//     td.contentEditable = false;
//   };
// });

const btns_delete = document.querySelectorAll("table .delete");
btns_delete.forEach((btn) => {
  btn.onclick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        btn.closest("tr").remove();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
    // if (confirm("Are you Sure ?!")) {
    //   btn.closest("tr").remove();
    // }
  };
});

const btns_edit = document.querySelectorAll("table .edit");
btns_edit.forEach((btn) => {
  btn.onclick = () => {
    if (btn.classList.contains("bg-blue-500")) {
      btn.classList.replace("bg-blue-500", "bg-green-500");
      btn.querySelector("i").classList.replace("fa-edit", "fa-check");

      btn.closest("tr").classList.add("bg-slate-700");

      btn
        .closest("tr")
        .querySelectorAll("td:not(:last-child)")
        .forEach((el) => (el.contentEditable = true));
    } else {
      Swal.fire({
        title: "Success!",
        text: "Your row has been updated.",
        icon: "success",
      });
      btn.classList.replace("bg-green-500", "bg-blue-500");
      btn.querySelector("i").classList.replace("fa-check", "fa-edit");

      btn.closest("tr").classList.remove("bg-slate-700");

      btn
        .closest("tr")
        .querySelectorAll("td:not(:last-child)")
        .forEach((el) => (el.contentEditable = false));
    }
  };
});

document.querySelector(".min-read").textContent = parseInt(
  document.body.innerText.split(" ").length / 200,
);
