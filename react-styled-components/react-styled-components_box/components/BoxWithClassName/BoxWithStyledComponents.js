import styled from "styled-components";

const BoxWithStyledComponents = ({ isBlack }) => {
  const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    margin: 2rem;
    background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
    &:hover {
      background-color: red;
    }
  `;
  return <StyledBox $isBlack={isBlack}></StyledBox>;
};

export default BoxWithStyledComponents;
