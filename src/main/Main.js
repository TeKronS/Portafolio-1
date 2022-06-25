import { Main } from "./styles";
import { ProjectsSection } from "./Proyectos/projectsSection";
import { TegnologiesSection } from "./Technologies/technologiesSection";
import { InfoSection } from "./InfoPersonal/infoSection";

export const MainSection = () => {
  return (
    <Main>
      <TegnologiesSection />
      <ProjectsSection />
      <InfoSection />
    </Main>
  );
};
