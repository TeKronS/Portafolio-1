import { Main } from "./styles";
import { ProyectsSection } from "./Proyectos/proyectsSection";
import { TegnologiesSection } from "./Technologies/technologiesSection";
import { InfoSection } from "./InfoPersonal/infoSection";

export const MainSection = () => {
  return (
    <Main>
      <TegnologiesSection />
      <ProyectsSection />
      <InfoSection />
    </Main>
  );
};
