const formEl = document.querySelector(".login-form");
const formSubmitBtnEl = document.querySelector("button[type ='submit']");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Please fill in all the fields!");
  }
  console.log(`{Email: ${email.value}, Password: ${password.value}}`);
  event.currentTarget.reset();
});
