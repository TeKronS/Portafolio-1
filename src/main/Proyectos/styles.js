import styled from "styled-components";

export const Body = styled.section`
  background: #2a1f36;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='linear' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23000000'/%3E%3Cstop offset='50%25' stop-color='%230A113A'/%3E%3Cstop offset='100%25' stop-color='%23260404'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='0 0, 0 100, 50 50' /%3E%3Cpolygon fill='%231d1d1d' stroke='url(%23linear)' stroke-width='2px' points='100 0, 100 100, 50 50' /%3E%3Ccircle cx='0' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='0' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='0' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='100' cy='100' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3Ccircle cx='50' cy='50' r='10' stroke='url(%23linear)' stroke-width='2px' fill='%231d1d1d' /%3E%3C/svg%3E");
  background-attachment: fixed;
  padding-bottom: 10px;
`;

export const ProjectContainer = styled.div`
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
  @media screen and (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

export const SectionCard = styled.section`
  display: grid;
  grid-gap: 30px;
  box-sizing: content-box;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  padding: 25px;
  border-radius: 3px;
  border-top: 2px solid #007cf4;
  box-shadow: 0px -2px 1.5px white;
  margin: 0 20px;
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
  @media screen and (max-width: 500px) {
    margin: 0 10px;
    padding: 25px 13px;
  }
`;

export const Title = styled.h2`
  span {
    border-radius: 10px;
    background: linear-gradient(#7928ca 50%, #ff0080);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ContainDescripotion = styled.div`
  position: fixed;
  display: flex;
  visibility: hidden;
  z-index: 60;
  height: calc(100vh - 20px);
  top: 0;
  right: 0;
  left: 0;
  background: rgba(250, 250, 250, 0.6);
  overflow: auto;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
  cursor: default;
  div {
    border-radius: 10px;
    position: relative;
    width: 100%;
    max-width: 600px;
    background-color: white;
    color: #1d1d1d;
    padding: 10px;
    border: 1px solid #1d1d1d;
  }
  h3 {
    text-align: center;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    padding: 2px 14px 0 14px;
    color: #ff4040;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    border-left: 1px solid #1d1d1d;
    border-bottom: 1px solid #1d1d1d;
    cursor: pointer;
    background: #1d1d1d;
    transition: 150ms ease 0s;
    :hover {
      color: #ff0080;
      font-size: 25px;
      line-height: 35px;
    }
  }
  p {
    padding: 0 20px;
    text-indent: 30px;
  }
`;
