import { useAtom } from "jotai";
import { Button } from "./Button";
import { initialAtom, nameAtom, progressAtom } from "../store/reviewStore";
import { checkListItems } from "../store/data";
import { TextInput } from "./TextInput";
import { Text } from "./Text";

export function StartScreen() {
  const [_initial, setInitial] = useAtom(initialAtom);
  const [name, setName] = useAtom(nameAtom);
  const [_progress, setProgress] = useAtom(progressAtom);

  const startReview = () => {
    // checkListItemsと各要素の長さに応じてprogressを初期化する
    let newProgress: boolean[][] = [];
    for (let i = 0; i < checkListItems.length; i++) {
      newProgress.push(new Array(checkListItems[i].length).fill(false));
    }
    setProgress(newProgress);
    setInitial(false);
  }
  
  return (
    <div className="flex flex-col items-center gap-4">
      <Text text="レビュー対象の名称を入力してください。" size="large" />
      <div className="flex items-center gap-4">
        <TextInput value={name} disabled={false} onChange={setName} />
        <Button text="START" disabled={!name} onPress={startReview}/>
      </div>
    </div>
  )
}