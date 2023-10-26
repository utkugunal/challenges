console.clear();

// EXERCISE 1
// Create an object personWithNameAgeEmail with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name: "Mauro",
  age: 30,
  email: "mauroicardi@spiced.com",
};

console.log(
  "the personWithNameAgeEmail object after change",
  personWithNameAgeEmail
);

// EXERCISE 2
// Set the values of name and age equal to the corresponding values of the personAlex object.

const personAlex = {
  name: "Alex",
  age: 24,
};

const nameOfAlex = personAlex.name;
const ageOfAlex = personAlex.age;

console.log(
  "New variables nameOfAlex and ageOfAlex are:",
  nameOfAlex,
  "and",
  ageOfAlex
);

// EXERCISE 3
// Change the value of name to "Alex" and the value of age to "35" by updating the object personToChange: person.existingProperty = newValue.

const personToChange = {
  name: "Kim",
  age: 24,
};

personToChange.name = "Alex";
personToChange.age = 35;

console.log("personToChange array after the update:", personToChange);

// EXERCISE 4
// Add the properties age "5" and breed "husky" to the object petPluto: pet.newProperty = newValue.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

petPluto.age = 7;
petPluto.breed = "husky";

console.log("The petPluto array after the update:", petPluto);

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
