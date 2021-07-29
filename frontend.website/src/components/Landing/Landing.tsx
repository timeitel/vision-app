import { FC } from "react";
import styled from "styled-components";

interface Props {}

const StyledWrapper = styled.div`
  height: 100vh;
  background: aqua;
`;

export const Landing: FC<Props> = ({}) => {
  console.log("really do some work griffin");

  const motivations = ["you can do it", "I belive in you", "nice shirt"];

  return (
    <StyledWrapper>
      <h1>
        {motivations[Math.floor(Math.random() * motivations.length)]} griffin
      </h1>
    </StyledWrapper>
  );
};
