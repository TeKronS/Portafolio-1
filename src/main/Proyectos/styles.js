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
  grid-template-rows: 1fr 1fr 1fr;
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

export const ContainDescripotion = styled.div`
  position: fixed;
  display: flex;
  z-index: 7;
  height: calc(100vh - 20px);
  top: 0;
  right: 0;
  left: 0;
  background: rgba(250, 250, 250, 0.6);
  overflow: auto;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
  cursor: default;
  div {
    border-radius: 10px;
    position: relative;
    width: 100%;
    max-width: 600px;
    background-color: white;
    color: #1d1d1d;
    padding: 10px;
    border: 1px solid #1d1d1d;
  }
  h3 {
    text-align: center;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    padding: 2px 14px 0 14px;
    color: #ff4040;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    border-left: 1px solid #1d1d1d;
    border-bottom: 1px solid #1d1d1d;
    cursor: pointer;
    background: #1d1d1d;
    transition: 150ms ease 0s;
    :hover {
      color: #ff0080;
      font-size: 25px;
      line-height: 35px;
    }
  }
  p {
    padding: 0 20px;
    text-indent: 30px;
  }
`;
