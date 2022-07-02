const darkModeButton = document.querySelector(".js-dark-mode");
const topNavBar = document.querySelector(".js-navbar");
const carouselInner = [...document.querySelectorAll(".carousel-inner")];
const modalContent = document.querySelector(".modal-content");
const modalImage = modalContent?.querySelector("img");
const logo = document.querySelector(".logo");
const paragraphs = [...document.querySelectorAll(".lead")];
const headings = [...document.querySelectorAll("h1")];
const searchBar = document.querySelector(".js-search-bar");
const searchForm = document.querySelector(".js-search-form");
const footerLinks = [...document.querySelectorAll(".js-links-container a")];
const watercolorCarouselDiv = document.querySelector(
  ".watercolor-carousel-div"
);
const allegoricalCarouselDiv = document.querySelector(
  ".allegorical-carousel-div"
);
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
  logo.classList.toggle("dark-mode");
  paragraphs.forEach(e => {
    e.classList.toggle("text-white");
  });
  headings.forEach(e => {
    e.classList.toggle("text-white");
  });
  footerLinks.forEach(e => {
    e.classList.toggle("text-black-50");
    e.classList.toggle("text-white-50");
  });
});

// searchBar.addEventListener("input", e => {
//   const inputValue = e.target.value;
// });

// searchForm.addEventListener("submit", () => {
//   console.log("submit");
// });
// const r = new FileReader();
// r.readAsText(blob);
// const imgArray = [];
// for (let i = 1; i < 4; i++) {
//   const img = new Image();
//   img.src = `img/allegorical/${i}.jpg`;
//   img.alt = `img/allegorical/${i}.jpg`;
//   img.classList.add("d-flex", "m-auto");
//   const carouselItem = document.createElement("div");
//   carouselItem.classList.add("carousel-item");
//   i === 1 && carouselItem.classList.add("active");
//   carouselItem.append(img);
//   carouselInner[0].append(carouselItem);
// }

// for (let i = 1; i < 4; i++) {
//   const img = new Image();
//   img.src = `img/soap/${i}.jpg`;
//   img.alt = `img/soap/${i}.jpg`;
//   img.classList.add("d-flex", "m-auto");
//   const carouselItem = document.createElement("div");
//   carouselItem.classList.add("carousel-item");
//   i === 1 && carouselItem.classList.add("active");
//   carouselItem.append(img);
//   carouselInner[1].append(carouselItem);
// }

// for (let i = 1; i < 4; i++) {
//   const img = new Image();
//   img.src = `img/watercolor/${i}.jpg`;
//   img.alt = `img/watercolor/${i}.jpg`;
//   img.classList.add("d-flex", "m-auto");
//   const carouselItem = document.createElement("div");
//   carouselItem.classList.add("carousel-item");
//   i === 1 && carouselItem.classList.add("active");
//   carouselItem.append(img);
//   carouselInner[2].append(carouselItem);
// }

// for (let i = 1; i < 4; i++) {
//   const img = new Image();
//   img.src = `img/pastel/${i}.jpg`;
//   img.alt = `img/pastel/${i}.jpg`;
//   img.classList.add("d-flex", "m-auto");
//   const carouselItem = document.createElement("div");
//   carouselItem.classList.add("carousel-item");
//   i === 1 && carouselItem.classList.add("active");
//   carouselItem.append(img);
//   carouselInner[3].append(carouselItem);
// }
