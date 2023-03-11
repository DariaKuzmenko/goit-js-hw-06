const buttonChangeColorEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonChangeColorEl.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  document.body.style.backgroundColor = color;
});
