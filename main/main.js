const links = document.querySelector("header .navigate .links");
const showIcon = document.querySelector(".show-icon");
showIcon.addEventListener("click", () => {
  links.classList.toggle("active");
});
const elements = document.querySelectorAll(".navigate li a");
console.log(elements);
function scrollto(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e);
      if (e.target.dataset.nav != null) {
        document
          .querySelector(`.${e.target.dataset.nav}`)
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
scrollto(elements);
const cart = document.querySelector(".cart");
const cartIcon = document.querySelector("header .icons i.shopping");
cartIcon.addEventListener("click", (event) => {
  event.preventDefault();
  cart.classList.toggle("active");
});
const numOfItems = document.querySelector(
  "header .navigate .icons i:nth-child(3) span"
);
const addButton = document.querySelectorAll(".features .box button");
addButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    numOfItems.innerHTML++;
  });
});
