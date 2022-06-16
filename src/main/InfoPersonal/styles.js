import styled from "styled-components";

export const Body = styled.section`
  display: grid;
  align-items: center;
  min-height: calc(100vh - 60px);
  grid-template-rows: 100px 1fr;
  gap: 30px;
`;

export const ContentBody = styled.div`
  display: grid;
  gap: 20px;
  padding: 0 20px;
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    grid-template-columns: 500px 1fr;
    justify-content: center;
    justify-self: center;
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
  border-bottom: 2px solid #f9cb28;
  span {
    background: linear-gradient(#ff4040 50%, #f9cb28);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width: 600px) {
    font-size: 3.5em;
  }
`;
export const InfoBox = styled.section`
  border: 7px solid #ff7f33;
  border-radius: 5px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 280px;
  background: rgba(250, 250, 250, 0.6);
  max-width: 500px;

  @media screen and (max-width: 550px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-rows: 250px 1fr;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  background: #1d1d1d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='linear' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23f0f0f0'/%3E%3Cstop offset='50%25' stop-color='%23f0f0f0'/%3E%3Cstop offset='100%25' stop-color='%23260404'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='0 0, 0 100, 50 50' /%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='100 0, 100 100, 50 50' /%3E%3Ccircle cx='0' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='0' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='50' cy='50' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3C/svg%3E");

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
  font-size: 18px;
`;
export const Info = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100px 20px 1fr;
  grid-template-rows: 50px 35px 35px 35px auto;
  align-items: center;

  span {
    font-weight: bold;
    display: flex;
    margin-left: 5px;
    border-bottom: 1px solid #ff4040;
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

  a {
    color: white;
    display: grid;
    justify-items: center;
    border: 2px solid white;
    border-radius: 5px;
    margin: 10px 5px;
    width: 74px;
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

  @media screen and (max-width: 535px) {
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
