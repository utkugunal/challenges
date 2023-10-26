import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>First one</Button>
      <Button>runner up</Button>
      <Button>Another interesting button</Button>
      <Button>BTN</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
