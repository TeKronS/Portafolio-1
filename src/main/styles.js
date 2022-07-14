import styled from "styled-components";

export const Main = styled.main`
  overflow-x: hidden;
  h2 {
    display: flex;
    align-self: center;
    justify-self: center;
    font-size: 10vw;
    font-weight: 800;
    font-family: RobotoTK, GothamTK, Geneva, Tahoma;
    @media screen and (min-width: 600px) {
      font-size: 3.5em;
    }
  }
`;
