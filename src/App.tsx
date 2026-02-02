import { ButtonGradient } from "./assets/svg";
import {
  Benefits,
  Collaboration,
  Footer,
  Header,
  Hero,
  Pricing,
  Roadmap,
  Services,
} from "./components";

function App() {
  return (
    <>
      <div className="pt-20 lg:pt-20 overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
