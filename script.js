console.log("Hello!");

////////////////////
// Javascript to change body color on hover
const logo = document.querySelector(".logo");
const body = document.querySelector("body");

logo.addEventListener("mouseover", () => {
  body.classList.add("logo-hover");
});

logo.addEventListener("mouseout", () => {
  body.classList.remove("logo-hover");
});
