import { createGlobalStyle } from "styled-components";
import Roboto1 from "./Roboto.woff";
import Roboto2 from "./Roboto.woff2";
import Gotham1 from "./Gotham.woff";
import Gotham2 from "./Gotham.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'RobotoTK';
        src: local('RobotoTK'), local('RobotoTK'),
        url(${Roboto1}) format('woff'),
        url(${Roboto2}) format('woff2');
        font-weight: 500;
        font-style: normal;
    }
   
    @font-face {
        font-family: 'GothamTK';
        src: local('GothamTK'), local('GothamTK'),
        url(${Gotham1}) format('woff'),
        url(${Gotham2}) format('woff2');
        font-weight: 800;
        font-style: normal;
    }
`;
