import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "Apple",
      color: "red",
    },
    {
      id: 2,
      name: "Lettuce",
      color: "green",
    },
    {
      id: 3,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 4,
      name: "Cucumber",
      color: "green",
    },
    {
      id: 5,
      name: "Berry",
      color: "pink",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
