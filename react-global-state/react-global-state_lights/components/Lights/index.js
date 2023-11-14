import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ rooms, onToggle }) {
  return (
    <StyledLights>
      {rooms.map((room) => (
        <li key={room.id}>
          <Light
            name={room.name}
            onToggle={onToggle}
            id={room.id}
            isOn={room.isOn}
          ></Light>
        </li>
      ))}
    </StyledLights>
  );
}
