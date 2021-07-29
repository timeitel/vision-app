import { FC } from "react";
import styled from "styled-components";

interface Props {}

const StyledWrapper = styled.div`
  height: 100vh;
`;

export const Landing: FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <h1>do some work griffin</h1>
    </StyledWrapper>
  );
};
