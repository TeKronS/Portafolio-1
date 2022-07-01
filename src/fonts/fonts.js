import { createGlobalStyle } from "styled-components";
import Roboto1 from "./Roboto.woff";
import Roboto2 from "./Roboto.woff2";
import RobotoTop1 from "./ROBOTOP.woff";
import RobotoTop2 from "./ROBOTOP.woff2";

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
        font-family: 'RobotoTopTK';
        src: local('RobotoTopTK'), local('RobotoTopTK'),
        url(${RobotoTop1}) format('woff'),
        url(${RobotoTop2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
