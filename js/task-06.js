const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const input = event.target.value.length;
  const validation = Number(event.target.dataset.length);
  event.target.classList.toggle("valid", input === validation);
  event.target.classList.toggle("invalid", input !== validation);
});
