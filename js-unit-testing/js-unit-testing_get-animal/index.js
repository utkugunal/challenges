export function getAnimal(animal) {
  if (animal === "cats") {
    return "I totally love cats!";
  } else if (animal == undefined) {
    return "I do not like animals at all!";
  } else {
    return `I like ${animal}!`;
  }
}
