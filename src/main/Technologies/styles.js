import styled from "styled-components";

export const Body = styled.section`
  background: #1b282a;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='linear' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23000000'/%3E%3Cstop offset='50%25' stop-color='%230A113A'/%3E%3Cstop offset='100%25' stop-color='%23260404'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='0 0, 0 100, 50 50' /%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='100 0, 100 100, 50 50' /%3E%3Ccircle cx='0' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='0' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='50' cy='50' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3C/svg%3E");
  background-attachment: fixed;
  padding-bottom: 10px;
`;

export const TecContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-rows: 150px 1fr;
  gap: 20px;
  border-radius: 3px;
  border-top: 2px solid #007cf4;
  box-shadow: 0px -2px 1.5px white;
  min-height: 100vh;
  width: calc(100% - 40px);
  padding-bottom: 50px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  span {
    border-radius: 10px;
    background: linear-gradient(#007cf4 50%, #00dfd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SectionBody = styled.div`
  display: grid;
  gap: 10px;
  padding: 0 10px;
  justify-content: center;

  @media screen and (min-width: 600px) {
    gap: 30px;
    padding: 0 20px;
  }
`;

export const BoxTechnologies = styled.article`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-rows: repeat(auto-fill, 130px);
  grid-auto-flow: rows;
  width: calc(100% - 20px);
  max-width: 1000px;
  gap: 10px;
  justify-content: space-around;
  border-radius: 3px;
  border-top: 2px solid #007cf4;
  box-shadow: 0px -2px 1.5px white;
  padding: 10px 10px 25px 10px;
`;

export const Titlebox = styled.h4`
  display: flex;
  grid-column-start: 1;
  grid-column-end: -1;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin: 0;
  height: 75px;
  border-radius: 3px;

  span {
    background: linear-gradient(#00dfd8, #007cf4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
`;

export const BoxImg = styled.div`
  background: white;
  border-radius: 6px;
  height: 130px;
  width: 100px;
`;

export const Img = styled.img`
  width: 95px;
  height: 95px;
  margin: 2.5px;
  object-fit: contain;
  pointer-events: none;
`;

export const TecTitle = styled.h5`
  text-align: center;
  margin: 5px;
`;
