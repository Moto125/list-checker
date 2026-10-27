import { useAtom } from "jotai";
import { Button, Label } from "@heroui/react";
import { nameAtom, selectedChecklistAtom } from "../../../store/inCheckStore";
import { useNavigate } from "react-router";

export function FinishScreen() {
  const navigate = useNavigate();
  const [_name, setName] = useAtom(nameAtom);
  const [_selectedChecklist, setSelectedChecklistAtom] = useAtom(
    selectedChecklistAtom,
  );

  const resetChecklist = () => {
    setName("");
    setSelectedChecklistAtom(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Label>チェックお疲れさまでした！</Label>
      <Button onPress={resetChecklist}>次のチェックを開始する</Button>
    </div>
  );
}
