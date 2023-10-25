import "./styles.css";

export default function App() {
  return <Greeting name="Jan" />;
}

function Greeting({ name }) {
  if (name == "Jan" || name == "Marcell") {
    return <h1>Hello, Coach!</h1>;
  }
  return <h1>Change the coach</h1>;
}
