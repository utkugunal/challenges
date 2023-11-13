import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialRooms = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [rooms, setRooms] = useState(initialRooms);

  function handleToggle(roomId) {
    setRooms(
      rooms.map((room) => {
        return room.id !== roomId ? room : { ...room, isOn: !room.isOn };
      })
    );
  }

  function handleAllOn() {
    setRooms(
      rooms.map((room) => {
        return { ...room, isOn: true };
      })
    );
  }

  function handleAllOff() {
    setRooms(
      rooms.map((room) => {
        return { ...room, isOn: false };
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        rooms={rooms}
        onToggle={handleToggle}
        handleAllOn={handleAllOn}
        handleAllOff={handleAllOff}
      />
    </Layout>
  );
}
