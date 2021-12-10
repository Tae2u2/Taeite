let list = document.querySelectorAll(".myList");
let menuToggle = document.querySelector(".toggle");
let sideBar = document.querySelector(".sidebar");

for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  sideBar.classList.toggle("active");
};
