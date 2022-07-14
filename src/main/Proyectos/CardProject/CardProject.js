import { useRef } from "react";
import { Body, ButtonBox } from "./styles";

export const CardProject = ({ link, repo, image, Description }) => {
  const RefImg = useRef(null);
  function LinkClick(e) {
    if (e.isTrusted) {
      e.preventDefault();
    }
  }
  function InfoClick() {
    RefImg.current.nextSibling.classList.toggle("open");
  }

  return (
    <Body>
      <img ref={RefImg} loading={"lazy"} alt="" src={image} width={600} />

      <Description closeInfo={InfoClick} />
      <ButtonBox>
        <a onClick={LinkClick} target={"blank"} href={repo}>
          Repo
        </a>
        <a onClick={LinkClick} target={"blank"} href={link}>
          Visitar
        </a>
        <button onClick={InfoClick}>Info</button>
      </ButtonBox>
    </Body>
  );
};
