import { useAtom } from "jotai";
import { Button, Input, Label } from "@heroui/react";
import {
  initialAtom,
  nameAtom,
  progressAtom,
  selectedReviewPointsAtom,
} from "../../../store/reviewStore";
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
      <Label>レビュー対象の名称を入力してください。</Label>
      <Input
        value={name}
        disabled={false}
        onChange={(e) => setName(e.target.value)}
      />
      <Label>使用するチェックリストを選択してください。</Label>
      <RadioButtons list={radioList} onChange={onChangeRadio} />
      <div className="flex flex-row gap-2">
        <Button onPress={() => navigate("/setting")}>新規</Button>
        <Button
          isDisabled={selectedReviewPoints.length === 0}
          onPress={() => navigate("/setting")}
        >
          編集
        </Button>
      </div>
      <Button
        isDisabled={!name || selectedReviewPoints.length === 0}
        onPress={startReview}
      >
        START
      </Button>
    </div>
  );
}
