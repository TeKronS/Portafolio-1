import styled from "styled-components";

const DURATION = 15;
const RESOLUTION_H = "1050px";
const RESOLUTION_W = "620px";
const RESOLUTION_F_H = "600px";
const RESOLUTION_F_W = "380px";

export const Header = styled.header`
  display: grid;
  min-height: 100vh;
  overflow: hidden;
  grid-gap: 20px;
  grid-template-rows: 1fr 5fr;
  @media screen and (min-width: ${RESOLUTION_H}) {
    grid-template-rows: auto 1fr;
  }
  @media screen and (min-height: ${RESOLUTION_F_H}) and (max-width: ${RESOLUTION_F_W}) {
    grid-template-rows: 1fr 7fr;
  }

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

export const Title = styled.h1`
  text-align: center;
  font-size: 20vw;
  font-family: "RobotoTK";
  letter-spacing: -0.02em;
  user-select: none;
  box-sizing: border-box;
  color: white;
  margin: 0;
  width: 100%;
  max-width: 600px;
  background-color: #1d1d1d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='linear' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23000000'/%3E%3Cstop offset='50%25' stop-color='%230A113A'/%3E%3Cstop offset='100%25' stop-color='%23260404'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='0 0, 0 100, 50 50' /%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='100 0, 100 100, 50 50' /%3E%3Ccircle cx='0' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='0' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='50' cy='50' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3C/svg%3E");
  background-attachment: fixed;

  @media screen and (min-width: ${RESOLUTION_W}) {
    font-size: 8rem;
  }

  @media screen and (min-width: ${RESOLUTION_H}) {
    margin: auto -8px auto 0;
    padding-bottom: 10px;
    justify-self: end;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    width: 105%;
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
      height: 170px;
      left: 0;
      right: 0;
      inset: 0;
      text-align: center;
      white-space: nowrap;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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

export const BoxProfile = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  border-top-right-radius: 70%;
  border-bottom-right-radius: 70%;
  background-color: #1d1d1d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='linear' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23f0f0f0'/%3E%3Cstop offset='50%25' stop-color='%23f0f0f0'/%3E%3Cstop offset='100%25' stop-color='%23260404'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='0 0, 0 100, 50 50' /%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='100 0, 100 100, 50 50' /%3E%3Ccircle cx='0' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='0' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='50' cy='50' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3C/svg%3E");
  background-attachment: fixed;
  margin: auto;

  @media screen and (min-width: ${RESOLUTION_H}) {
    width: 90%;
    max-width: 1000px;
    height: 90%;
    min-height: 500px;
    max-height: 600px;
    border: 1px solid white;
    box-shadow: 0px 0px 6px white;
  }

  @media screen and (min-height: ${RESOLUTION_F_H}) and (max-width: ${RESOLUTION_F_W}) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 0;
  }
`;

export const Name = styled.span`
  text-align: center;
  font-size: 11vw;
  font-weight: 800;
  font-family: Geneva, Tahoma;
  background: linear-gradient(#313c92 60%, #27c6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 2px solid #00dfd8;
  border-top: 2px solid #313c92;
  transform: scaley(120%);
  box-shadow: 0px 0px 6px white;
  width: 100%;
  padding: 0 10px;
  align-self: end;
  @media screen and (min-width: ${RESOLUTION_W}) {
    font-size: 4.3em;
  }
  @media screen and (min-width: ${RESOLUTION_H}) {
    width: auto;
    margin: 20px 0 0 0;
    align-self: center;
  }
`;

export const BoxImgProfile = styled.div`
  display: none;
  img {
    margin: auto;
    border-radius: 555px;
    border: 2px solid white;
  }
  @media screen and (min-width: ${RESOLUTION_H}) {
    display: flex;
    margin: auto;
  }
  @media screen and (min-height: ${RESOLUTION_F_H}) and (max-width: ${RESOLUTION_F_W}) {
    display: flex;
  }
`;
