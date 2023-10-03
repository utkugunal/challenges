console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let diameter1 = pizzaInput1.value; // !!! NOTE: We define the value of diameter1 in the global scope. Without any input change, it takes the value of 24 as a pre-set value !!!
let diameter2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {
  diameter1 = pizzaInput1.value; // !!! NOTE: And then we define the value of diameter1 here inside of the EventListener, so it updates the pre-set value of the diameter with the new, entered value !!!
  calculatePizzaGain(diameter1, diameter2); // !!! NOTE: Right after the input entry, we run the function for the PizzaGain calculation.
  updatePizzaDisplay(pizza1, diameter1);
  updateOutputColor(diameter1, diameter2);
});

pizzaInput2.addEventListener("input", () => {
  diameter2 = pizzaInput2.value; // if I define a new "let diameter1" here, the following problem occurs :// I set the diameter2 to 25cm and then the diameter1 to 25cm and it shows me a '-8%' gain instead of 0%....

  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, diameter2);
  updateOutputColor(diameter1, diameter2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const pizzaArea1 = Math.PI * (diameter1 / 2) ** 2; // !!! NOTE: square of a number can be calculated using ** 2 after the number !!!
  const pizzaArea2 = Math.PI * (diameter2 / 2) * (diameter2 / 2);
  const pizzaGain = ((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100;
  output.innerHTML = Math.round(pizzaGain); // !!! NOTE: Setting the `textContent` of the output element to the rounded value of the pizzaGain !!!
}

// Task 2
// define the function updatePizzaDisplay here

// !!! NOTE: you cannot use a variable before declaring it but you CAN use a FUNCTION already in the previous lines and then you declare it afterwards in the code !!!

function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = `${newDisplaySize}px`; // ??????? How do we search the method of converting the number value to a pixel value on internet?? When I search I find a method from pixel to number but not the other way around.
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  if (size2 < size1) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
