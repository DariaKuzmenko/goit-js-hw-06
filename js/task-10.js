const inputEl = document.querySelector('[type="number"]');
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxesCreateEl = document.querySelector("#boxes");
boxesCreateEl.style.cssText =
  "display: flex; flex-wrap: wrap; gap: 10px; align-items: center";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  let arrayBox = [];
  let boxSize = 30;
  amount = inputEl.value;

  for (let i = 0; i < amount; i += 1) {
    // destroyBoxes();
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}`;

    boxSize += 10;
    arrayBox.push(box);
  }

  boxesCreateEl.append(...arrayBox);
};

const destroyBoxes = () => {
  document.querySelectorAll(".box").forEach((box) => box.remove());
  inputEl.value = "";
};

buttonCreateEl.addEventListener("click", createBoxes);

buttonDestroyEl.addEventListener("click", destroyBoxes);
