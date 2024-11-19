//============= start toggel menu code  ========= //
const menu = document.getElementById("menu-icon");
const navList = document.querySelector(".nav-list");
menu.addEventListener("click", (eo) => {
  menu.classList.toggle("fa-x");
  navList.classList.toggle("open");
});
//============= end toggel menu code  ========= //
