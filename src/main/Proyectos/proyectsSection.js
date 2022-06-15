import {
  Body,
  Title,
  SectionCard,
  CardProyect,
  BoxProyect,
  BoxRepo
} from "./styles";
import img1 from "./../../img/Proyects/Canvas Dibujo 1.jpg";
import img2 from "./../../img/Proyects/IB Admin 1.png";
import img3 from "./../../img/Proyects/Tienda Online 1.jpg";
import img4 from "./../../img/Proyects/Inversiones Boara Wep App.jpg";

export const ProyectsSection = () => {
  return (
    <Body>
      <Title>
        <span>Proyectos</span>
      </Title>
      <SectionCard>
        <CardProyect>
          <img loading={"lazy"} alt="" src={img1} width={600} />
          <BoxProyect
            target={"blank"}
            href={"https://tekrons.github.io/Canva-Dibujo/"}
          >
            <span>Visitar</span>
          </BoxProyect>
          <BoxRepo
            target={"blank"}
            href={"https://github.com/TeKronS/Canva-Dibujo"}
          >
            <span>Repo</span>
          </BoxRepo>
        </CardProyect>
        <CardProyect>
          <img loading={"lazy"} alt="" src={img2} width={600} />
          <BoxProyect
            target={"blank"}
            href={"https://tekrons.github.io/Inversiones-Boara-Admin-Form/"}
          >
            <span>Visitar</span>
          </BoxProyect>
          <BoxRepo
            target={"blank"}
            href={"https://github.com/TeKronS/Inversiones-Boara-Admin-Form"}
          >
            <span>Repo</span>
          </BoxRepo>
        </CardProyect>
        <CardProyect>
          <img loading={"lazy"} alt="" src={img3} width={600} />
          <BoxProyect
            target={"blank"}
            href={"https://tekrons.github.io/Tienda-Online/"}
          >
            <span>Visitar</span>
          </BoxProyect>
          <BoxRepo
            target={"blank"}
            href={"https://github.com/TeKronS/Tienda-Online"}
          >
            <span>Repo</span>
          </BoxRepo>
        </CardProyect>
        <CardProyect>
          <img loading={"lazy"} alt="" src={img4} width={600} />
          <BoxProyect
            target={"blank"}
            href={"https://inversiones-boara.web.app/"}
          >
            <span>Visitar</span>
          </BoxProyect>
          <BoxRepo
            target={"blank"}
            href={"https://github.com/TeKronS/Inversiones-Boara"}
          >
            <span>Repo</span>
          </BoxRepo>
        </CardProyect>
      </SectionCard>
    </Body>
  );
};
