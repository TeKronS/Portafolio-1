import { Main } from "./styles";
import { ProjectsSection } from "./Proyectos/projectsSection";
import { TegnologiesSection } from "./Technologies/technologiesSection";
import { InfoSection } from "./InfoPersonal/infoSection";
import { AnimationTitle } from "./Titulo/AnimationTitle";

export const MainSection = () => {
  return (
    <Main>
      <AnimationTitle />
      <TegnologiesSection />
      <ProjectsSection />
      <InfoSection />
    </Main>
  );
};
