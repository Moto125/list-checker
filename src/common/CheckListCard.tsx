import { progressAtom } from "../store/reviewStore";
import { useAtom } from "jotai";
import { Checkbox, CheckboxGroup, Label } from "@heroui/react";

type CheckListCardProps = {
  caroucelNum: number;
  checklist: string[];
};
export function CheckListCard({ caroucelNum, checklist }: CheckListCardProps) {
  const [progress, setProgress] = useAtom(progressAtom);
  const carouselProgress =
    progress[caroucelNum] || new Array(checklist.length).fill(false);

  const onCheck = (index: number) => {
    const newCarouselProgress = [...carouselProgress];
    newCarouselProgress[index] = !newCarouselProgress[index];

    const newProgress = [...progress];
    newProgress[caroucelNum][index] = progress[caroucelNum][index]
      ? false
      : true;
    setProgress(newProgress);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Label>{`${caroucelNum + 1} / ${progress.length}`}</Label>
      <CheckboxGroup>
        {checklist.map((check, index) => {
          return (
            <Checkbox key={index} value={check} onChange={() => onCheck(index)} >
              <Checkbox.Content>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Label>{check}</Label>
              </Checkbox.Content>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </div>
  );
}
