import { useAtom } from "jotai";
import { Button, Input, Label } from "@heroui/react";
import {
  checklistsAtom,
  nameAtom,
  selectedChecklistAtom,
} from "../../../store/inCheckStore";
import { RadioButtons } from "../../../common/RadioButtons";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { getChecklists } from "../../../store/useStorage";

export function StartScreen() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useAtom(selectedChecklistAtom);
  const [name, setName] = useAtom(nameAtom);
  const [checklists, setChecklists] = useAtom(checklistsAtom);
  const radioList = checklists.map((checklist) => {
    return {
      id: checklist.id,
      label: checklist.title,
    };
  });

  const onChangeRadio = (id: string) => {
    const selectedChecklist = checklists.find(
      (checklist) => checklist.id === id,
    );
    if (!selectedChecklist) return;
    setSelectedItems(selectedChecklist);
  };

  const startCheck = () => {
    navigate("/in-check");
  };

  useEffect(() => {
    // 初回起動時にストアからデータを取得する
    const fetchData = async () => {
      const checklists = await getChecklists();
      setChecklists(checklists || []);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <Label>今回のチェックに名前をつけてください</Label>
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
          isDisabled={selectedItems === null}
          onPress={() => navigate(`/setting?checklistId=${selectedItems?.id}`)}
        >
          編集
        </Button>
      </div>
      {checklists.length === 0 ? (
        <p>チェックリストがありません。新規作成してください。</p>
      ) : (
        checklists.length > 10 && (
          <p>作成できるチェックリストは10件までです。</p>
        )
      )}
      <Button isDisabled={!name || selectedItems === null} onPress={startCheck}>
        START
      </Button>
    </div>
  );
}
