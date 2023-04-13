/** @format */

const validationInput = document.querySelector("#validation-input");

const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const valueLength = event.target.value.length;
  const requiredLength = Number(event.target.getAttribute("data-length"));

  if (valueLength === requiredLength) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
});
