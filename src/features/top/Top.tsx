import "../../App.css";
import { StartScreen } from "./components/StartScreen";

function Top() {
  return (
    <main className="flex flex-col bg-mist-200 items-center mt-6">
      <StartScreen />
    </main>
  );
}

export default Top;
