const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  if (inputEl.value !== "") {
    inputEl.classList.toggle("valid", event.target.value.length >= 6);
    inputEl.classList.toggle("invalid", event.target.value.length < 6);
  }
});
