import styled from "styled-components";

const RESOLUTION_W = "1160px";

export const Body = styled.section`
  background: #371e1e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='linear' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23000000'/%3E%3Cstop offset='50%25' stop-color='%230A113A'/%3E%3Cstop offset='100%25' stop-color='%23260404'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='0 0, 0 100, 50 50' /%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='100 0, 100 100, 50 50' /%3E%3Ccircle cx='0' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='0' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='50' cy='50' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3C/svg%3E");
  background-attachment: fixed;
  padding-bottom: 10px;
`;

export const InfoContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 150px 1fr;
  gap: 30px;
  border-radius: 3px;
  border-top: 2px solid #007cf4;
  box-shadow: 0px -2px 1.5px white;
  width: calc(100% - 40px);
  margin: 0 auto;
  padding-bottom: 100px;
  @media screen and (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

export const ContentInfoBox = styled.div`
  display: grid;
  gap: 20px;
  padding: 25px;
  overflow: hidden;
  box-shadow: 0px -2px 1.5px white;
  margin: 10px 20px;

  @media screen and (min-width: ${RESOLUTION_W}) {
    grid-template-columns: 1fr 1fr;
    justify-self: center;
  }
  @media screen and (max-width: 500px) {
    padding: 25px 13px;
    margin: 10px;
  }
`;

export const Title = styled.h2`
  span {
    border-radius: 10px;
    background: linear-gradient(#ff4040 50%, #f9cb28);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const InfoBox = styled.section`
  border: 7px solid #ff7f33;
  border-radius: 5px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 230px 1fr;
  grid-template-rows: 280px;
  background: rgba(250, 250, 250, 0.6);
  max-width: 600px;
  .data {
    color: #c02727;
  }
  .flecha {
    font-size: 22px !important;
  }
  @media screen and (max-width: 600px) {
    grid-auto-flow: row;
    gap: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 285px 1fr;
  }
`;

export const ImageBox = styled.div`
  display: flex;

  img {
    margin: auto;
    border-radius: 5px;
  }
`;

export const Name = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  grid-column-start: 1;
  grid-column-end: -1;
  font-size: 20px;
`;
export const Info = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 90px 20px 1fr;
  grid-template-rows: 50px 35px 35px 35px auto;
  align-items: center;

  span {
    font-weight: bold;
    display: flex;
    margin-left: 5px;
    border-bottom: 1px solid #ff4040;
  }
  @media screen and (max-width: 600px) {
    gap: 10px;
  }
`;

export const Description = styled.p`
  display: flex;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 5;
  font-size: 15px;
  margin: 0 5px 5px;
  padding: 5px;
  background: white;
  border-radius: 5px;
`;

export const Contact = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 auto;
  border: 7px solid #ff7f33;
  border-radius: 5px;
  background: rgba(250, 250, 250, 0.6);
  width: calc(100% - 15px);
  max-width: 500px;
  /* @media screen and (min-width: 1000px) {
    margin: auto;
  } */
`;

export const ContactTitle = styled.h2`
  text-align: center;
  margin: 5px;
  border-bottom: 1px solid #ff4040;
  font-size: 30px;
  padding: 10px;
`;

export const ContactLinkBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: #1d1d1d;
  padding: 20px;
  font-family: "RobotoTK";
  a {
    color: white;
    display: grid;
    justify-items: center;
    border: 2px solid white;
    border-radius: 5px;
    margin: 10px 5px;
    width: 80px;
    :hover {
      color: orange;
      border-color: orange;
    }
  }

  img {
    border-radius: 99px;
    height: 50px;
    width: 50px;
    overflow: hidden;
    margin: 5px 0;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    gap: 20px;
    a {
      margin: 0;
    }
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;
