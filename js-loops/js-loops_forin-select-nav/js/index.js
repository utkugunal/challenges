console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (const language in languages) {
  const option = document.createElement("option");
  option.textContent = languages[language]; // if we keep it as 'option.textContent = language', then it will print only the property keys (DE, EN etc.) on the screen.
  // option.value = language;
  option.value = languages[language];
  select.append(option);
}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (const navItem in nav) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  // console.log(nav[navItem].text);

  a.setAttribute("href", nav[navItem].href); // !!! ??? NOTE 1: nav[navItem][href] notation did not work here.... it work only this way.
  // !!! NOTE 2: we need the setAttribute method (build-in function) here, because we are calling the value of the attribute of the relevant element.
  a.textContent = nav[navItem].text; //

  li.append(a);
  ul.append(li);
}
// --^-- write/change code here --^--
