import styled from "styled-components";

const duration = 15;

export const Header = styled.header`
  display: grid;
  min-height: 100vh;
  overflow: hidden;
  grid-gap: 10px;
  @media screen and (min-width: 1150px) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
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
  font-weight: 800;
  letter-spacing: -0.06em;
  user-select: none;
  box-sizing: border-box;
  color: white;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;

  @media screen and (min-width: 620px) {
    font-size: 8rem;
  }

  @media screen and (min-width: 1150px) {
    margin: auto 15px auto 0;
  }
  span {
    display: block;
    position: relative;
    line-height: 1.1;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    :before {
      opacity: 0;
      position: absolute;
      height: 170px;
      inset: 0;
      padding: 0 10px;
      white-space: nowrap;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const Text1 = styled.span`
  :before {
    background: linear-gradient(90deg, #007cf4, #00dfd8);
    animation: textAnimated ${duration / 2 + "s"} infinite 0s;
    content: "Front-end";
  }
  div {
    animation: animation1 ${duration + "s"} infinite 0s ease;
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
    animation: textAnimated ${duration / 2 + "s"} infinite
      ${duration / 3.3 / 2 + "s"};
    content: "Web";
  }
  div {
    animation: animation2 ${duration + "s"} infinite ${duration / 3.3 / 2 + "s"}
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
    animation: textAnimated ${duration / 2 + "s"} infinite
      ${duration / 3.3 + "s"};
    content: "Developer";
  }
  div {
    animation: animation1 ${duration + "s"} infinite ${duration / 3.3 + "s"}
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
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1150px) {
    margin: auto;
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
  transform: scaley(120%);
  box-shadow: 0px 0px 6px white;
  width: 100%;
  padding: 0 10px;
  margin: auto 0;
  @media screen and (min-width: 620px) {
    font-size: 4em;
  }
  @media screen and (min-width: 1150px) {
    width: auto;
    margin: 20px 0 20px 0;
    align-self: center;
  }
`;

export const BoxImgProfile = styled.div`
  display: none;
  height: 250px;
  box-shadow: 0px 0px 6px white;
  background: #1d1d1d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='linear' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23f0f0f0'/%3E%3Cstop offset='50%25' stop-color='%23f0f0f0'/%3E%3Cstop offset='100%25' stop-color='%23260404'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='0 0, 0 100, 50 50' /%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='100 0, 100 100, 50 50' /%3E%3Ccircle cx='0' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='0' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='50' cy='50' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3C/svg%3E");
  img {
    margin: auto;
    border-radius: 5px;
    border: 2px solid white;
  }
  @media screen and (min-width: 1150px) {
    display: flex;
  }
  @media screen and (min-height: 551px) and (max-width: 400px) {
    display: flex;
  }
`;
