const darkModeButton = document.querySelector(".js-dark-mode");
const topNavBar = document.querySelector(".js-navbar");
const logo = document.querySelector(".logo");
const headings = [...document.querySelectorAll("h1, p, label.col-form-label")];
const footerLinks = [...document.querySelectorAll(".js-links-container a")];
const underlineLinks = [...document.querySelectorAll("a.custom-underline")];
localStorage.getItem("dark-mode") && darkModeButtonEventHandler();
function darkModeButtonEventHandler() {
  document.body.classList.toggle("dark-mode");
  darkModeButton.classList.toggle("text-dark");
  topNavBar.classList.toggle("navbar-light");
  topNavBar.classList.toggle("navbar-dark");
  logo.classList.toggle("dark-mode");
  headings.forEach(e => {
    e.classList.toggle("text-white");
  });
  footerLinks.forEach(e => {
    e.classList.toggle("text-black-50");
    e.classList.toggle("text-white-50");
  });
  underlineLinks.forEach(e => {
    e.classList.toggle("dark-mode");
  });
  document.body.classList.contains("dark-mode")
    ? localStorage.setItem("dark-mode", true)
    : localStorage.removeItem("dark-mode");
}
darkModeButton.addEventListener("click", darkModeButtonEventHandler);
