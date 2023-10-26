console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// console.log(document.getElementById("addition").checked);
// console.log(document.getElementById("subtraction").checked);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const valueA = Number(formElements.numberA.value);
  const valueB = Number(formElements.numberB.value);

  console.log(valueA);
  console.log(valueB);

  if (document.getElementById("addition").checked) {
    result = add(valueA, valueB);
  } else if (document.getElementById("subtraction").checked) {
    result = subtract(valueA, valueB);
  } else if (document.getElementById("multiplication").checked) {
    result = multiply(valueA, valueB);
  } else if (document.getElementById("division").checked) {
    result = divide(valueA, valueB);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
