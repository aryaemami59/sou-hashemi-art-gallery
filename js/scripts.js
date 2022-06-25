const darkModeButton = document.querySelector(".js-dark-mode");
const topNavBar = document.querySelector(".js-navbar");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeButton.classList.toggle("text-dark");
  topNavBar.classList.toggle("navbar-light");
  topNavBar.classList.toggle("navbar-dark");
});
