const { body } = document;
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

hamburger.addEventListener("click", () => {
  body.classList.add("show-close");
});

close.addEventListener("click", () => {
  body.classList.remove("show-close");
});
