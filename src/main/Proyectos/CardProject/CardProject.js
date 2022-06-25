import { useState } from "react";
import { Body, BoxProject, BoxRepo, InfoButton } from "./styles";

export const CardProject = ({ link, repo, image, Description }) => {
  const [info, setInfo] = useState(false);
  function openInfo() {
    setInfo(true);
  }
  function closeInfo() {
    setInfo(false);
  }
  console.log(Description);
  return (
    <Body>
      <img loading={"lazy"} alt="" src={image} width={600} />
      <BoxProject target={"blank"} href={link}>
        <span>Visitar</span>
      </BoxProject>
      <BoxRepo target={"blank"} href={repo}>
        <span>Repo</span>
      </BoxRepo>
      <InfoButton onClick={openInfo}>+ Inf</InfoButton>

      {info && <Description closeInfo={closeInfo} />}
    </Body>
  );
};
