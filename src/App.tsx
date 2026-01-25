import ButtonGradient from "./assets/svg/ButtonGradient";
import { Header, Hero } from "./components";

function App() {
  return (
    <>
      <div className="pt-20 lg:pt-20 overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
