import { progressAtom } from "../store/reviewStore";
import { useAtom } from "jotai";
import { Text } from "./Text";
import { Checkbox } from "./Checkbox";

type CheckListCardProps = {
  caroucelNum: number;
  checklist: string[];
}
export function CheckListCard({ caroucelNum, checklist }: CheckListCardProps) {
  const [progress, setProgress] = useAtom(progressAtom);
  const carouselProgress = progress[caroucelNum] || new Array(checklist.length).fill(false);

  const onCheck = (index: number) => {
    const newCarouselProgress = [...carouselProgress];
    newCarouselProgress[index] = !newCarouselProgress[index];

    const newProgress = [...progress];
    newProgress[caroucelNum][index] = progress[caroucelNum][index] ? false : true;
    setProgress(newProgress);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Text text="レビューできた観点をチェックしていきましょう" size="medium" />
      <Text text={`${caroucelNum + 1} / ${progress.length}`} size="small" />
      <div className="flex flex-col justify-start min-w-3xs">
        {checklist.map((check, index) => {
          return (
            <div key={index} className="flex flex-row justify-start gap-1">
              {/* TODO: チェックボックスに変更 */}
              <Checkbox checked={carouselProgress[index]} onCheck={() => onCheck(index)} />
              <Text text={check} size="medium" />
            </div>
          )})
        }
      </div>
    </div>
  )
}