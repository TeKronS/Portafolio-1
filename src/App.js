import { FooterSection } from "./footer/Footer";
import { HeaderSection } from "./header/Header";
import { MainSection } from "./main/Main";
import GlobalFonts from "./fonts/fonts";

function App() {
  return (
    <>
      <GlobalFonts />
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </>
  );
}

export default App;
