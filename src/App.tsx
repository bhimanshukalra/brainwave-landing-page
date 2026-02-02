import { ButtonGradient } from "./assets/svg";
import { Benefits, Collaboration, Header, Hero, Services } from "./components";

function App() {
  return (
    <>
      <div className="pt-20 lg:pt-20 overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
