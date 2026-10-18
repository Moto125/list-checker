import { useAtom } from "jotai";
import { Button, Label } from "@heroui/react";
import { CheckListCard } from "../../../common/CheckListCard";
import {
  countAtom,
  progressAtom,
  selectedReviewPointsAtom,
} from "../../../store/reviewStore";

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
      <Label>レビューできた観点をチェックしていきましょう</Label>
      <Label>{`チェックリスト ${caroucelNum + 1} / ${progress.length}`}</Label>
      <Label>{checkListThemes[caroucelNum]}</Label>
      <CheckListCard
        caroucelNum={caroucelNum}
        checklist={checkListItems[caroucelNum]}
      />

      <div className="flex items-center gap-4">
        {caroucelNum > 0 && (
          <Button onPress={() => setCaroucelNum(caroucelNum - 1)}>Back</Button>
        )}
        <p>{progress}</p>
        <Button
          isDisabled={!progress[caroucelNum]?.every(Boolean)}
          onPress={() => setCaroucelNum(caroucelNum + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
