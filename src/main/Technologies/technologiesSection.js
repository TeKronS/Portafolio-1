import {
  Body,
  Title,
  SectionBody,
  Titlebox,
  Img,
  BoxTechnologies,
  TecTitle,
  BoxImg
} from "./styles";
import html5Icon from "./../../img/Technologies/732212.png";
import reactIcon from "./../../img/Technologies/1200px-React.svg.png";
import cssIcon from "./../../img/Technologies/CSS3_logo_and_wordmark.svg.png";
import jsIcon from "./../../img/Technologies/javascript-icon-png-23.jpg";
import nextIcon from "./../../img/Technologies/1200px-Nextjs-logo.svg.png";
import gitIcon from "./../../img/Technologies/Git-logo_pr848f.png";
import tsIcon from "./../../img/Technologies/Typescript_logo_2020.svg.png";
import mongodbIcon from "./../../img/Technologies/descarga.png";
import firebaseIcon from "./../../img/Technologies/touchicon-180.png";
import graphQLIcon from "./../../img/Technologies/GraphQL_Logo.svg.png";
import figmaIcon from "./../../img/Technologies/figma.avif";

export const TegnologiesSection = () => {
  return (
    <Body>
      <Title>
        <span>Tecnologias</span>
      </Title>
      <SectionBody>
        <BoxTechnologies>
          <Titlebox>
            <span>Aprendidas</span>
          </Titlebox>
          <BoxImg>
            <TecTitle>HTML</TecTitle>
            <Img alt="HTML" src={html5Icon} />
          </BoxImg>

          <BoxImg>
            <TecTitle>REACT</TecTitle>
            <Img alt="REACT" src={reactIcon} />
          </BoxImg>

          <BoxImg>
            <TecTitle>NEXT.js</TecTitle>
            <Img alt="NEXT.js" src={nextIcon} />
          </BoxImg>

          <BoxImg>
            <TecTitle>CSS</TecTitle>
            <Img alt="CSS" src={cssIcon} />
          </BoxImg>

          <BoxImg>
            <TecTitle>Javascript</TecTitle>
            <Img alt="Javascript" src={jsIcon} />
          </BoxImg>

          <BoxImg>
            <TecTitle>Typescript</TecTitle>
            <Img alt="Typescript" src={tsIcon} />
          </BoxImg>

          <BoxImg>
            <TecTitle>GIT</TecTitle>
            <Img alt="GIT" src={gitIcon} />
          </BoxImg>

          <BoxImg>
            <TecTitle>Firebase</TecTitle>
            <Img alt="Firebase" src={firebaseIcon} />
          </BoxImg>

          <BoxImg>
            <TecTitle>Figma</TecTitle>
            <Img alt="Figma" src={figmaIcon} />
          </BoxImg>
        </BoxTechnologies>
        <BoxTechnologies>
          <Titlebox>
            <span>Me Interesa Aprender</span>
          </Titlebox>

          <BoxImg>
            <TecTitle>Mongo DB</TecTitle>
            <Img alt="Mongo DB" src={mongodbIcon} />
          </BoxImg>

          <BoxImg>
            <TecTitle>GraphQL</TecTitle>
            <Img alt="GraphQL" src={graphQLIcon} />
          </BoxImg>
          <div className={"relleno"} />
          <div className={"relleno"} />
        </BoxTechnologies>
      </SectionBody>
    </Body>
  );
};
