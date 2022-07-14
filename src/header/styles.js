import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  height: 130px;
  position: sticky;
  top: 0;
  z-index: 55;
  pointer-events: none;
  div {
    display: flex;
  }
`;

export const BoxColor = styled.div`
  position: absolute;
  height: 130px;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #007cf4, #00dfd8);
`;

export const ContentBox = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;

  clip-path: polygon(
    0px 85px,
    3px 90px,
    5px 93px,
    10px 97px,
    15px 99px,
    20px 100px,
    52px 100px,
    82px 130px,
    112px 100px,
    calc(100% - 20px) 100px,
    calc(100% - 15px) 99px,
    calc(100% - 10px) 97px,
    calc(100% - 5px) 93px,
    calc(100% - 3px) 90px,
    100% 85px,
    100% 0px,
    0px 0px
  );
`;

export const Bala = styled.div`
  width: 3px;
  height: 10px;
  position: absolute;
  left: 80px;
  top: 120px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid red;
  z-index: 56;
`;

export const CirclePower = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 999px;
  top: -25px;
  right: -20px;
  background: radial-gradient(#ff4040 10%, #f9cb28);
`;

export const Barr = styled.div`
  position: absolute;
  height: 40px;
  border-bottom: 1px solid #ff0080;
  top: 0;
  right: 0;
  left: 0;
  align-items: center;
  padding-left: 20px;
  font-size: 25px;
  font-family: GothamTK, RobotoTK;
  span {
    background: linear-gradient(90deg, #1d1d1d, #ff4040);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const LinePower = styled.div`
  position: absolute;
  height: 100px;
  top: 40px;
  right: 0;
  left: 0;
  overflow: hidden;
`;
