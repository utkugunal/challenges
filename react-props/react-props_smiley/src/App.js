import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  if (isHappy) {
    return <h1>🙂</h1>;
  }
  return <h1>😫</h1>;
}
