console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const program of programmingLanguages) {
  const li = document.createElement("li");
  // console.log(program);
  li.textContent = program;
  ol.append(li);
  // console.log(ol);
}

// --^-- write/change code here --^--
