import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    return console.log("You clicked me!");
  }
  return (
    <Button
      color="white"
      disabled={false}
      text="Click me!"
      backgroundColor="green"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, backgroundColor, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ color: color, backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
