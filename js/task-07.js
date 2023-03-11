const inputValueEl = document.querySelector("#font-size-control");
const textEL = document.querySelector("#text");

inputValueEl.addEventListener("input", (event) => {
  textEL.style.fontSize = `${event.target.value}px`;
});
