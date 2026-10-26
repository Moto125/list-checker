import { useAtom } from "jotai";
import { Button, Label } from "@heroui/react";
import { CheckListCard } from "../../../common/CheckListCard";
import { selectedChecklistAtom } from "../../../store/inCheckStore";
import { useNavigate } from "react-router";
import { useState } from "react";

export function InCheckScreen() {
  const navigate = useNavigate();
  const [selectedItems] = useAtom(selectedChecklistAtom);
  const [progress, setProgress] = useState<boolean[]>(
    Array.from({ length: selectedItems?.items.length || 0 }, () => false),
  );

  const onCheck = (index: number) => {
    const newProgress = [...progress];
    newProgress[index] = !newProgress[index];
    setProgress(newProgress);
  };

  const handleBack = () => {
    // TODO: データが失われることの確認
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Label>チェックしていきましょう</Label>
      <CheckListCard checklist={selectedItems?.items || []} onCheck={onCheck} />

      <div className="flex items-center gap-2">
        <Button onPress={handleBack}>Back</Button>
        <Button
          isDisabled={!progress.every(Boolean)}
          onPress={() => navigate("/finish")}
        >
          Finish
        </Button>
      </div>
    </div>
  );
}
