import { Body, Title, Text1, Text2, Text3, Virgulilla } from "./styles";

export const AnimationTitle = () => {
  return (
    <Body>
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
    </Body>
  );
};
