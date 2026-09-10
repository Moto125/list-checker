import { useAtom } from "jotai";
import { Button } from "./Button"
import { CheckListCard } from "./CheckListCard"
import { countAtom, progressAtom } from "../store/reviewStore";
import { checkListItems } from "../store/data";

export function InReviewScreen() {
  const [caroucelNum, setCaroucelNum] = useAtom(countAtom);
  const [progress, _setProgress] = useAtom(progressAtom);

  return (
    <div className="flex flex-col items-center gap-4">
      <CheckListCard caroucelNum={caroucelNum} checklist={checkListItems[caroucelNum]} />

      <div className="flex items-center gap-4">
        <Button text="Back" onPress={() => setCaroucelNum(caroucelNum - 1)}/>
        <Button disabled={!progress[caroucelNum]?.every(Boolean)} text="Next" onPress={() => setCaroucelNum(caroucelNum + 1)}/>
      </div>
    </div>
  )
}