/** @format */

const validationInput = document.querySelector("#validation-input");

const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const valueLength = event.target.value.length;
  const requiredLength = Number(event.target.getAttribute("data-length"));

  function addValidClass(element) {
    element.classList.remove("invalid");
    element.classList.add("valid");
  }

  function addInvalidClass(element) {
    element.classList.remove("valid");
    element.classList.add("invalid");
  }

  if (valueLength === requiredLength) {
    addValidClass(event.target);
  } else {
    addInvalidClass(event.target);
  }
});
