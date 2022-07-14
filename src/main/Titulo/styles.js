import styled from "styled-components";

const DURATION = 15;
const RESOLUTION_W = "755px";
const RESOLUTION_W2 = "1100px";

export const Body = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 130px);
  margin-top: -20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 18vw;
  font-family: "GothamTK";
  letter-spacing: -0.02em;
  user-select: none;
  box-sizing: border-box;
  color: white;
  margin: 0 0 30px 0;

  @media screen and (min-width: ${RESOLUTION_W}) {
    font-size: 9rem;
  }
  @media screen and (min-width: ${RESOLUTION_W2}) {
    font-size: 11rem;
  }

  span {
    display: block;
    position: relative;
    line-height: 1.1;
    padding-right: 10px;
    margin-left: -5%;
    white-space: nowrap;
    width: 110%;
    overflow: hidden;
    :before {
      display: block;
      width: 100%;
      opacity: 0;
      position: absolute;
      margin-left: -5px;
      left: 0;
      right: 0;
      inset: 0;
      text-align: center;
      white-space: nowrap;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  //Animaciones
  @keyframes animation1 {
    0% {
      transform: translate(-200%);
    }
    20% {
      transform: translate(calc(100% * 5));
    }
    50% {
      transform: translate(calc(100% * 5));
    }
    70% {
      transform: translate(-200%);
    }
    100% {
      transform: translate(-200%);
    }
  }
  @keyframes animationBox {
    0% {
      margin-left: -30%;
    }
    50% {
      margin-left: -13%;
    }
    100% {
      margin-left: -30%;
    }
  }
  @keyframes animation2 {
    0% {
      transform: translate(calc(100% * 5));
    }
    20% {
      transform: translate(-200%);
    }
    50% {
      transform: translate(-200%);
    }
    70% {
      transform: translate(calc(100% * 5));
    }
    100% {
      transform: translate(calc(100% * 5));
    }
  }
  @keyframes textAnimated {
    0%,
    16.66%,
    100% {
      opacity: 0;
    }
    33.33% {
      opacity: 1;
    }
  }
`;

export const Text1 = styled.span`
  :before {
    background: linear-gradient(90deg, #007cf4, #00dfd8);
    animation: textAnimated ${DURATION / 2 + "s"} infinite 0s;
    content: "Front-end";
  }
  div {
    animation: animation1 ${DURATION + "s"} infinite 0s ease;
    div {
      background: linear-gradient(90deg, #007cf4, #00dfd8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
export const Text2 = styled.span`
  :before {
    background: linear-gradient(90deg, #7928ca, #ff0080);
    animation: textAnimated ${DURATION / 2 + "s"} infinite
      ${DURATION / 3.3 / 2 + "s"};
    content: "Web";
  }
  div {
    animation: animation2 ${DURATION + "s"} infinite ${DURATION / 3.3 / 2 + "s"}
      ease;
    div {
      background: linear-gradient(90deg, #7928ca, #ff0080);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
export const Text3 = styled.span`
  :before {
    background: linear-gradient(90deg, #ff4040, #f9cb28);
    animation: textAnimated ${DURATION / 2 + "s"} infinite
      ${DURATION / 3.3 + "s"};
    content: "Developer";
  }
  div {
    animation: animation1 ${DURATION + "s"} infinite ${DURATION / 3.3 + "s"}
      ease;
    div {
      background: linear-gradient(90deg, #ff4040, #f9cb28);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const Virgulilla = styled.div`
  position: absolute !important;
  overflow: hidden;
  width: 30%;
  height: 22%;
  inset: 0;
  transform: translate(-100%);
  top: 75%;
  border-radius: 999px;
  div {
    top: -190%;
    margin-left: -30%;
    letter-spacing: -0.3em;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute !important;
    width: auto !important;
    animation: animationBox 0.2s infinite linear;
  }
`;
