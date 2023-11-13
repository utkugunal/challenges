import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ handleAllOn, handleAllOff }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          handleAllOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleAllOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
