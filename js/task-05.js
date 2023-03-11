const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("span");

inputEl.addEventListener("input", (event) => {
  if (inputEl.value) {
    spanEl.textContent = event.currentTarget.value;
  } else {
    spanEl.textContent = "Anonymous";
  }
});
