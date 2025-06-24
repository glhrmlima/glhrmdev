import "./App.css";
import Footer from "./componentes/components/Footer";
import Header from "./componentes/components/Header";
import Landing from "./componentes/components/Landing";
import LandingMenu from "./componentes/components/LandingMenu";
import Skills from "./componentes/components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Landing />
      <Skills />
      <LandingMenu />
      <Footer />
    </>
  );
}
