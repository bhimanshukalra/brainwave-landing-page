import { ButtonGradient } from "./assets/svg";
import { Benefits, Collaboration, Header, Hero } from "./components";

function App() {
  return (
    <>
      <div className="pt-20 lg:pt-20 overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
