import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Another day of choosing random titles</h2>
      <label htmlFor="input1"></label>
      <input id="input1" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(software)"
        target="blank"
      ></a>
    </article>
  );
}
