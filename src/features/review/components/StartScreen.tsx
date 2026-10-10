import { useAtom } from "jotai";
import { Button } from "../../../common/Button";
import {
  initialAtom,
  nameAtom,
  progressAtom,
  selectedReviewPointsAtom,
} from "../../../store/reviewStore";
import { TextInput } from "../../../common/TextInput";
import { Text } from "../../../common/Text";
import { defaultReviewPoints } from "../../../data/defaultReviewPoints";
import { RadioButtons } from "../../../common/RadioButtons";
import { useNavigate } from "react-router";

export function StartScreen() {
  const navigate = useNavigate();
  const [_initial, setInitial] = useAtom(initialAtom);
  const [selectedReviewPoints, setSelectedReviewPoints] = useAtom(
    selectedReviewPointsAtom,
  );
  const [name, setName] = useAtom(nameAtom);
  const [_progress, setProgress] = useAtom(progressAtom);
  const radioList = defaultReviewPoints.reviewList.map((review) => {
    return {
      id: review.id,
      label: review.title,
    };
  });

  const onChangeRadio = (id: string) => {
    const selectedReview = defaultReviewPoints.reviewList.find(
      (review) => review.id === id,
    );
    if (!selectedReview) return;
    setSelectedReviewPoints(selectedReview.reviewPoints);
  };

  const startReview = () => {
    // checkListItemsと各要素の長さに応じてprogressを初期化する
    let newProgress: boolean[][] = [];
    for (let i = 0; i < selectedReviewPoints.length; i++) {
      newProgress.push(
        new Array(selectedReviewPoints[i].points.length).fill(false),
      );
    }
    setProgress(newProgress);
    setInitial(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Text text="レビュー対象の名称を入力してください。" size="large" />
      <TextInput value={name} disabled={false} onChange={setName} />
      <Text text="使用するチェックリストを選択してください。" />
      <RadioButtons list={radioList} onChange={onChangeRadio} />
      <Button text="追加・編集" onPress={() => navigate("/setting")} />
      <Button text="START" disabled={!name} onPress={startReview} />
    </div>
  );
}
