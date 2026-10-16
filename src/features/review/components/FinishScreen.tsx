import { useAtom } from "jotai";
import { Button, Label } from "@heroui/react";
import { countAtom, initialAtom, nameAtom } from "../../../store/reviewStore";

export function FinishScreen() {
  const [_initial, setInitial] = useAtom(initialAtom);
  const [_name, setName] = useAtom(nameAtom);
  const [_caroucelNum, setCaroucelNum] = useAtom(countAtom);

  const resetReview = () => {
    setName("");
    setCaroucelNum(0);
    setInitial(true);
  };

  return (
    <div>
      <Label>レビューお疲れさまでした！</Label>
      <Button  variant="outline" onPress={resetReview} >
        次のレビューを開始する
      </Button>
    </div>
  );
}
