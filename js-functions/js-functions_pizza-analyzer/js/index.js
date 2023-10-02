console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let diameter1 = pizzaInput1.value; // !!!!!!!! I added this one after the recap
let diameter2 = pizzaInput2.value; // !!!!!!!! I added this one after the recap

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, pizzaSize2); // !!!!!!!! I added this one after the recap - apparantly, this function has to be used within the EventListener
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  let area1 = Math.PI * (diameter1 / 2) ** 2;
  let area2 = Math.PI * (diameter2 / 2) * (diameter2 / 2);
  let pizzaGain = ((area2 - area1) / area1) * 100;
  output.innerHTML = Math.round(pizzaGain);
}

calculatePizzaGain(20, 40);

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  let newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = newDisplaySize; // !!!!!!!!!check out this '${result}px'
}

// Task 3
// define the function updateOutputColor here

//function updateOutputColor(size1,size2);{}
