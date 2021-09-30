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
});

// show alert after 5 sec of window load
// get the id
let popUp = document.querySelector("#popup");

// add event lisenter on window load
window.addEventListener("load", () => {
  showPopup();
});

window.addEventListener("click", () => {
  hidePopup();
});

// to show popup on window load
const showPopup = () => {
  setTimeout(function () {
    popUp.classList.add("show");
  }, 2000);
};

// to hide popup on clicking anwhere on window
const hidePopup = () => {
  setTimeout(function () {
    document.querySelector("#popup").style.display = "none";
  }, 0.000001);
};
