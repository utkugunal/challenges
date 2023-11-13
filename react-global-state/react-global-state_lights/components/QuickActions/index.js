import styled from "styled-components";
import Button from "../Button";
import { useEffect, useState } from "react";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ handleAllOn, handleAllOff }) {
  // rooms was added as prop above...
  // const [areAllLightsOn, setAreAllLightsOn] = useState(false);
  // const [areAllLightsOff, setAreAllLightsOff] = useState(false);

  // useEffect(() => {
  //   if (rooms.every((room) => room.isOn)) {
  //     setAreAllLightsOn(true);
  //   }
  //   if (rooms.every((room) => !room.isOn)) {
  //     setAreAllLightsOff(true);
  //   }
  // }, [rooms]);

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          handleAllOff();
        }}
        // disabled={areAllLightsOff}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleAllOn();
        }}
        // disabled={areAllLightsOn}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
