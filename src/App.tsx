import { ButtonGradient } from "./assets/svg";
import {
  Benefits,
  Collaboration,
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
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
