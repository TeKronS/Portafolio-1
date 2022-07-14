import {
  Title,
  InfoContainer,
  ContentInfoBox,
  Body,
  Info,
  ImageBox,
  InfoBox,
  Name,
  Contact,
  Description,
  ContactTitle,
  ContactLinkBox,
} from "./styles";
import imgProfile from "./../../img/Perfil/Y-O.jpg";
import fbLogo from "./../../img/Contact/fb-Logo.jpeg";
import gitLogo from "./../../img/Contact/web-github-icon.png";
import mailLogo from "./../../img/Contact/mail-logo.jpeg";
import whatsappLogo from "./../../img/Contact/WhatsappIcon.jpg";
import linkedinLogo from "./../../img/Contact/linkedin-icon.png";

export const InfoSection = () => {
  function contactClick(e) {
    if (e.isTrusted) {
      e.preventDefault();
    }
  }
  return (
    <Body>
      <InfoContainer>
        <Title>
          <span>Información</span>
        </Title>
        <ContentInfoBox>
          <InfoBox>
            <ImageBox>
              <img loading={"lazy"} alt="" width={230} src={imgProfile} />
            </ImageBox>
            <Info>
              <Name>
                <span>Simón Enrique Ramírez Ferrer </span>
              </Name>
              <span>Pais</span>
              <span>Español</span>
              <span>Ingles</span>

              <div className="flecha">→</div>
              <div className="flecha">→</div>
              <div className="flecha">→</div>

              <span className="data">Venezuela</span>
              <span className="data">Nativo</span>
              <span className="data">Intermedio</span>
              <Description>
                Me enfoco en mejorar la experiencia de usuario y crear buenos
                componentes reutilizables. Me gustaría formar parte en la
                creación y desarrollo de tecnologías revolucionarias.
              </Description>
            </Info>
          </InfoBox>
          <Contact>
            <ContactTitle>Contacto</ContactTitle>
            <ContactLinkBox>
              <a
                onClick={contactClick}
                target={"blank"}
                href={"https://www.facebook.com/simonenrique.ramirezferrer"}
              >
                <span>Facebook</span>
                <img loading={"lazy"} alt="" src={fbLogo} width={50} />
              </a>
              <a
                onClick={contactClick}
                target={"blank"}
                href={"https://github.com/TeKronS/"}
              >
                <span>GitHub</span>
                <img loading={"lazy"} alt="" src={gitLogo} width={50} />
              </a>
              <a
                onClick={contactClick}
                target={"blank"}
                href={"mailto:asper.tk93@gmail.com"}
              >
                <span>Mail</span>
                <img loading={"lazy"} alt="" src={mailLogo} width={50} />
              </a>
              <a
                onClick={contactClick}
                target={"blank"}
                href={
                  "https://api.whatsapp.com/send?phone=584262381721&text=Hola"
                }
              >
                <span>Whatsapp</span>
                <img loading={"lazy"} alt="" src={whatsappLogo} width={50} />
              </a>
              <a
                onClick={contactClick}
                target={"blank"}
                href={
                  "https://api.whatsapp.com/send?phone=584262381721&text=Hola"
                }
              >
                <span>LinkedIn</span>
                <img loading={"lazy"} alt="" src={linkedinLogo} width={50} />
              </a>
            </ContactLinkBox>
          </Contact>
        </ContentInfoBox>
      </InfoContainer>
    </Body>
  );
};
