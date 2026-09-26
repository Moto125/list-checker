import "./App.css";
import { useAtom } from "jotai";
import {
  countAtom,
  initialAtom,
  nameAtom,
  progressAtom,
} from "./store/reviewStore";
import { InReviewScreen } from "./components/InReviewScreen";
import { StartScreen } from "./components/StartScreen";
import { FinishScreen } from "./components/FinishScreen";
import { Text } from "./components/Text";

function App() {
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

export default App;
// アプリ名とアイコン変更
// ここまでやったらgithubにpushする
// TODO: 閉じるボタン押下時にデータが削除される旨のアラートを出す
// TODO: dataを永続化する
