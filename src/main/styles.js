import styled from "styled-components";

export const Main = styled.main`
  margin-bottom: 20px;
`;

export const TitleTec = styled.h2`
  background: linear-gradient(90deg, #ff4040, #f9cb28);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 2px solid #f9cb28;
  text-align: center;
  font-size: 10vw;
  font-weight: 800;
  font-family: Geneva, Tahoma;
  transform: scaley(120%);
  margin: 0 0 50px 0;
  box-shadow: 0px 0px 6px white;

  @media screen and (min-width: 600px) {
    font-size: 3.5em;
  }
`;
