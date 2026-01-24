import ButtonGradient from "./assets/svg/ButtonGradient";
import { Button } from "./components";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <div className="pt-20 lg:pt-20 overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
