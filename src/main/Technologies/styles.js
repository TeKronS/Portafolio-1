import styled from "styled-components";

export const Body = styled.section`
  display: grid;
  align-items: center;
  min-height: 100vh;
  grid-template-rows: 100px 1fr;
  gap: 20px;
  margin-bottom: 50px;
`;

export const SectionBody = styled.div`
  display: grid;
  gap: 10px;
  padding: 0 10px;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 0 20px;
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
  border-bottom: 2px solid #00dfd8;

  span {
    background: linear-gradient(#007cf4 50%, #00dfd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width: 600px) {
    font-size: 3.5em;
  }
`;

export const BoxTechnologies = styled.article`
  border: 15px solid white;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-rows: repeat(auto-fill, 130px);
  grid-auto-flow: row;
  gap: 10px;
  justify-content: space-around;
  border-radius: 5px;
  padding: 0 5px 10px 5px;
`;

export const Titlebox = styled.h4`
  display: flex;
  grid-column-start: 1;
  grid-column-end: -1;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border-radius: 3px;
  margin: 10px 0 20px 0;
  border-bottom: 1px solid white;
  height: 75px;
  border-bottom: 2px solid #007cf4;
  box-shadow: 0px 3px 3px white;
  background: #1d1d1d;
  span {
    color: #FFFFFF;
    text-align: center;
  }
`;

export const BoxImg = styled.div`
  background: white;
  border-radius: 6px;
`;

export const Img = styled.img`
  width: 95px;
  height: 95px;
  margin: 2.5px;
  object-fit: contain;
`;

export const TecTitle = styled.h5`
  text-align: center;
  margin: 5px;
  
`;
