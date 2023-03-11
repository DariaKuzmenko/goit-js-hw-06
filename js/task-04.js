const valueEl = document.querySelector("#value");
const buttonPlus = document.querySelector('[data-action="increment"]');
const buttonMinus = document.querySelector('[data-action="decrement"]');
let counterValue = 0;
const handleClickMinus = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const handleClickPlus = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

buttonMinus.addEventListener("click", handleClickMinus);
buttonPlus.addEventListener("click", handleClickPlus);
