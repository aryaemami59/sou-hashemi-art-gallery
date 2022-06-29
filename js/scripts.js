const darkModeButton = document.querySelector(".js-dark-mode");
const topNavBar = document.querySelector(".js-navbar");
const carouselInner = [...document.querySelectorAll(".carousel-inner")];
const modalContent = document.querySelector(".modal-content");
const modalImage = modalContent?.querySelector("img");
carouselInner.forEach(e => {
  e.addEventListener("click", () => {
    const activeImage = e.querySelector(".carousel-item.active > img");
    modalImage.src = activeImage.src;
  });
});
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeButton.classList.toggle("text-dark");
  topNavBar.classList.toggle("navbar-light");
  topNavBar.classList.toggle("navbar-dark");
});
