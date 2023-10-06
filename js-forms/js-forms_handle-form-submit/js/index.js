console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   const formElements = event.target.elements;
  //   console.log(formElements.firstName);
  //   console.log(formElements.firstName.value);

  //   console.log(event.target);

  const formData = new FormData(event.target);
  const complaint = Object.fromEntries(formData);

  console.log(complaint);

  event.target.elements.firstName.focus();
  event.target.reset();
});
