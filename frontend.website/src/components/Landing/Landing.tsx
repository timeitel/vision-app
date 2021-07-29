import { FC } from "react";
import styled from "styled-components";

interface Props {}

const StyledWrapper = styled.div`
  height: 100vh;
  background: aqua;
`;

export const Landing: FC<Props> = ({}) => {
  console.log("do some work griffin");

  const motivations = [
    "you can do it",
    "I believe in you",
    "nice shirt",
    "you're killing it",
  ];

  return (
    <StyledWrapper>
      <h1>
        {motivations[Math.floor(Math.random() * motivations.length)]} griffin
      </h1>
    </StyledWrapper>
  );
};
