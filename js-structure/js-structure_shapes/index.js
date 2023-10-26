import myCircleFunction from "/components/Circle/Circle.js";

import mySquareFunction from "/components/Square/Square.js";

import myPentagonFunction from "/components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

const circleElement = myCircleFunction();

const squareElement = mySquareFunction();

const pentagonElement = myPentagonFunction();

root.append(circleElement, squareElement, pentagonElement);
