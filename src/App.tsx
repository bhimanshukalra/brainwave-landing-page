import { ButtonGradient } from "./assets/svg";
import { Benefits, Header, Hero } from "./components";

function App() {
  return (
    <>
      <div className="pt-20 lg:pt-20 overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
