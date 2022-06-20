import {
  Header,
  Name,
  Title,
  Text1,
  Text2,
  Text3,
  Virgulilla,
  BoxImgProfile,
  BoxProfile,
} from "./styles";

import ImgProfile from "./../img/Perfil/Y-O.jpg";

export const HeaderSection = () => {
  return (
    <Header>
      <Name>Simón Ramírez </Name>

      <BoxProfile>
        <BoxImgProfile>
          <img alt="" src={ImgProfile} width={200} />
        </BoxImgProfile>
        <Title>
          <Text1>
            Front-end
            <Virgulilla>
              <div>~~~~~~~~</div>
            </Virgulilla>
          </Text1>
          <Text2>
            Web
            <Virgulilla>
              <div>~~~~~~~~</div>
            </Virgulilla>
          </Text2>
          <Text3>
            Developer
            <Virgulilla>
              <div>~~~~~~~~</div>
            </Virgulilla>
          </Text3>
        </Title>
      </BoxProfile>
    </Header>
  );
};
