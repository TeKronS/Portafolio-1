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

// export const BoxProject = styled.a`
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   position: absolute;
//   z-index: 2;
//   top: 0;
//   left: 0;
//   right: 0;
//   transition: 400ms ease-in-out 0s;
//   height: 0%;
//   background: rgba(29, 29, 29, 0.6);
//   border: 1px solid #7928ca;
//   overflow: hidden;
//   text-decoration: none;

//   span {
//     text-align: center;
//     height: 70px;
//     width: 80px;
//     background: linear-gradient(#7928ca 15%, #f0f0f0);
//     border: 2px solid #7928ca;
//     border-radius: 999px;
//     margin-bottom: -36px;
//     line-height: 40px;
//     color: black;
//     cursor: pointer;
//     font-weight: bold;
//   }
// `;

// export const BoxRepo = styled.a`
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   position: absolute;
//   z-index: 2;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   transition: 400ms ease-in-out 0s;
//   height: 0%;
//   background: rgba(29, 29, 29, 0.6);
//   border: 1px solid #7928ca;
//   overflow: hidden;
//   text-decoration: none;

//   span {
//     text-align: center;
//     height: 70px;
//     width: 80px;
//     background: linear-gradient(#f0f0f0, #7928ca 80%);
//     border: 2px solid #7928ca;
//     border-radius: 999px;
//     margin-top: -36px;
//     line-height: 95px;
//     color: white;
//     cursor: pointer;
//     font-weight: bold;
//   }
// `;

// export const InfoButton = styled.button`
//   display: none;
//   position: absolute;
//   right: 3px;
//   bottom: 3px;
//   z-index: 4;
//   padding: 5px 8px;
//   border-radius: 5px;
//   font-size: 16px;
//   border: 2px solid #ff0080;
//   font-weight: bold;

//   cursor: pointer;
//   :hover {
//     background: #eedbd6;
//   }
// `;
