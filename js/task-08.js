/** @format */

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const elements = event.target.elements;

  if (!elements.email.value.trim() || !elements.password.value.trim()) {
    alert("Будь ласка,заповніть всі поля!");
    return;
  }

  const formData = {
    email: elements.email.value,
    password: elements.password.value,
  };

  console.log(formData);

  event.target.reset();
});
