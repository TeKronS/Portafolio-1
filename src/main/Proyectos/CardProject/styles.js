import styled from "styled-components";

export const Body = styled.article`
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  overflow: hidden;
  transition: 500ms ease-in-out 0s;
  box-shadow: 0px 0px 6px white;
  background: #1d1d1d;

  img {
    width: 100%;
    height: calc(100% - 50px);
    pointer-events: none;
  }
  .open {
    visibility: visible !important;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  text-align: center;
  height: 35px;
  border-top: 5px solid white;
  background-color: white;
  a {
    :nth-child(2) {
      margin: 0 1px;
    }
    font-family: RobotoTK;
    flex: 1;
    text-decoration: none;
    line-height: 35px;
    font-size: 18px;
    transition: 200ms ease-in-out 0s;
    background: #1d1d1d;
    color: white;
    box-shadow: 0px 3px 5px #1d1d1d;

    :hover {
      transform: translateY(-4px);
    }
    :active {
      transform: translateY(0);
      color: #ff0080;
    }
  }
  button {
    flex: 1;
    border: none;
    font-family: RobotoTK;
    line-height: 35px;
    font-size: 18px;
    color: white;
    background: #1d1d1d;
    box-shadow: 0px 3px 5px #1d1d1d;
    cursor: pointer;
    transition: 200ms ease-in-out 0s;
    padding: 0;
    :hover {
      transform: translateY(-4px);
    }
    :active {
      transform: translateY(0);
      color: #ff0080;
    }
  }
`;
