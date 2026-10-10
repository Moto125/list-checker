import "../../App.css";
import { useAtom } from "jotai";
import {
  countAtom,
  initialAtom,
  nameAtom,
  progressAtom,
} from "../../store/reviewStore";
import { InReviewScreen } from "./components/InReviewScreen";
import { StartScreen } from "./components/StartScreen";
import { FinishScreen } from "./components/FinishScreen";
import { Text } from "../../common/Text";

function Review() {
  const [initial, _setInitial] = useAtom(initialAtom);
  const [caroucelNum, _setCaroucelNum] = useAtom(countAtom);
  const [name, _setName] = useAtom(nameAtom);
  const [progress, _setProgress] = useAtom(progressAtom);

  return (
    <main className="flex flex-col items-center">
      <div className="h-10">
        <Text text={name} size="large" />
      </div>
      {initial ? (
        <StartScreen />
      ) : caroucelNum < progress.length ? (
        <InReviewScreen />
      ) : (
        <FinishScreen />
      )}
    </main>
  );
}

export default Review;
