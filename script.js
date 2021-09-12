// toggle b/w dark light mode
let toggle_btn = document.querySelector(".slider");
let element = document.body;
let nav = document.querySelector(".navbar");

toggle_btn.addEventListener("click", () => {
  element.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");
});
