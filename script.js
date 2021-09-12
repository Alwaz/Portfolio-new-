// toggle b/w dark light mode
let toggle_btn = document.querySelector(".slider");
let element = document.body;
let nav = document.querySelector(".navbar");

// responsive menu bar
let menu = document.querySelector("#menu-bar");

// menu bar
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
});

// dark light mode toggle
toggle_btn.addEventListener("click", () => {
  element.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");
  icon.classList.toggle("dark-mode");
});
