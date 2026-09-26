import { useAtom } from "jotai";
import { Button } from "./Button";
import { CheckListCard } from "./CheckListCard";
import {
  countAtom,
  progressAtom,
  selectedReviewPointsAtom,
} from "../store/reviewStore";
import { Text } from "./Text";

export function InReviewScreen() {
  const [caroucelNum, setCaroucelNum] = useAtom(countAtom);
  const [progress, _setProgress] = useAtom(progressAtom);
  const [selectedReviewPoints] = useAtom(selectedReviewPointsAtom);
  const checkListThemes = selectedReviewPoints.map((point) => {
    return point.theme;
  });
  const checkListItems = selectedReviewPoints.map((point) => {
    return point.points;
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <Text text="レビューできた観点をチェックしていきましょう" size="medium" />
      <Text text={checkListThemes[caroucelNum]} />
      <CheckListCard
        caroucelNum={caroucelNum}
        checklist={checkListItems[caroucelNum]}
      />

      <div className="flex items-center gap-4">
        <Button text="Back" onPress={() => setCaroucelNum(caroucelNum - 1)} />
        <p>{progress}</p>
        <Button
          disabled={!progress[caroucelNum]?.every(Boolean)}
          text="Next"
          onPress={() => setCaroucelNum(caroucelNum + 1)}
        />
      </div>
    </div>
  );
}
