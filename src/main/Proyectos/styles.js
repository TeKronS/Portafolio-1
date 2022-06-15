import styled from "styled-components";

export const Body = styled.section`
  display: grid;
  align-items: center;
  min-height: 100vh;
  grid-template-rows: 100px 1fr;
  gap: 30px;
  margin-bottom: 50px;
`;

export const SectionCard = styled.section`
  display: grid;
  grid-gap: 30px;
  box-sizing: content-box;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  padding: 0 30px;
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
`;

export const Title = styled.h2`
  position: sticky;
  top: 4px;
  text-align: center;
  font-size: 10vw;
  font-weight: 800;
  font-family: Geneva, Tahoma;
  transform: scaley(120%);
  box-shadow: 0px 0px 6px white;
  background: #1d1d1d;
  z-index: 5;
  border-bottom: 2px solid #ff0080;

  span {
    background: linear-gradient(#7928ca 50%, #ff0080);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width: 600px) {
    font-size: 3.5em;
  }
`;

export const CardProyect = styled.article`
  position: relative;
  border: 1px solid black;
  border-radius: 3px;
  width: 100%;
  overflow: hidden;
  transition: 500ms ease-in-out 0s;
  box-shadow: 0px 0px 6px white;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  :hover {
    border-color: white;
    a {
      height: calc(50% - 2px);
      :hover {
        span {
          background: white;
          color: black;
        }
      }
    }
  }
`;

export const BoxProyect = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  transition: 400ms ease-in-out 0s;
  height: 0%;
  background: rgba(29, 29, 29, 0.6);
  border: 1px solid #7928ca;
  overflow: hidden;
  text-decoration: none;

  span {
    text-align: center;
    height: 70px;
    width: 80px;
    background: linear-gradient(#7928ca 15%, #f0f0f0);
    border: 2px solid #7928ca;
    border-radius: 999px;
    margin-bottom: -36px;
    line-height: 40px;
    color: black;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const BoxRepo = styled.a`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 400ms ease-in-out 0s;
  height: 0%;
  background: rgba(29, 29, 29, 0.6);
  border: 1px solid #7928ca;
  overflow: hidden;
  text-decoration: none;

  span {
    text-align: center;
    height: 70px;
    width: 80px;
    background: linear-gradient(#f0f0f0, #7928ca 80%);
    border: 2px solid #7928ca;
    border-radius: 999px;
    margin-top: -36px;
    line-height: 95px;
    color: white;
    cursor: pointer;
    font-weight: bold;
  }
`;
