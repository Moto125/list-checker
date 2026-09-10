import { useAtom } from "jotai";
import { Button } from "./Button";
import { countAtom, initialAtom, nameAtom } from "../store/reviewStore";
import { Text } from "./Text";

export function FinishScreen() {
  const [_initial, setInitial] = useAtom(initialAtom);
  const [_name, setName] = useAtom(nameAtom);
  const [_caroucelNum, setCaroucelNum] = useAtom(countAtom);

  const resetReview = () => {
    setName("");
    setCaroucelNum(0);
    setInitial(true);
  }
 
  return (
    <div>
      <Text text="レビューお疲れさまでした！" size="large" />
      <Button text="次のレビューを開始する" onPress={resetReview}/>
    </div>
  );
}