import { useNavigate, useSearchParams } from "react-router";
import "../../App.css";
import { Button, Input, Label } from "@heroui/react";
import { ChecklistData } from "../../type/ChecklistStoreData";
import { useState, KeyboardEvent, useEffect } from "react";
import { useAtom } from "jotai";
import { checklistsAtom } from "../../store/inCheckStore";
import {
  updateChecklist,
  saveStore,
  addChecklist,
} from "../../store/useStorage";

function SettingCheckList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [checklists, setChecklists] = useAtom<ChecklistData[]>(checklistsAtom);
  const checklistId = searchParams.get("checklistId");
  const [newList, setNewList] = useState<ChecklistData>({
    id: "",
    title: "",
    items: [],
  });
  const [inputValue, setInputValue] = useState("");

  const addNewPoint = (newPoint: string) => {
    if (newPoint.trim() !== "") {
      setNewList({
        ...newList,
        items: [...newList.items, newPoint],
      });
      setInputValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      const trimmedValue = inputValue.trim();

      if (trimmedValue) {
        addNewPoint(trimmedValue);
      }
    }
  };

  const handleItemChange = (index: number, newValue: string) => {
    const updatedItems = [...newList.items];
    updatedItems[index] = newValue;
    setNewList({ ...newList, items: updatedItems });
  };

  const handleBack = () => {
    // TODO: データが失われることの確認
    navigate("/");
  };

  const handleSave = async () => {
    const updateList: ChecklistData = { ...newList, lastUpdated: Date.now() };
    if (checklistId) {
      try {
        await updateChecklist(checklistId, updateList);
        await saveStore();
      } catch (error) {
        console.error("Error updating checklist:", error);
      }
      // IDが一致するチェックリストを更新
      setChecklists(
        checklists.map((checklist) =>
          checklist.id === checklistId ? updateList : checklist,
        ),
      );
    } else {
      updateList.id = Date.now().toString(); // 新しいIDを生成
      try {
        await addChecklist(updateList);
        await saveStore();
      } catch (error) {
        console.error("Error saving store:", error);
      }
      // 新しいチェックリストを追加
      setChecklists([...checklists, updateList]);
    }
    navigate("/");
  };

  useEffect(() => {
    if (checklistId) {
      // チェックリストに一致するIDを持つチェックリストを探す
      const checklistToEdit = checklists.find(
        (checklist) => checklist.id === checklistId,
      );
      if (checklistToEdit) {
        setNewList(checklistToEdit);
      }
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col bg-mist-200 items-center mt-6">
      <div className="h-10">
        <Label>チェックリスト編集画面</Label>
      </div>

      {/* データ入力 */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Label>チェックリスト名</Label>
          <Input
            value={newList.title}
            onChange={(e) => setNewList({ ...newList, title: e.target.value })}
          />
        </div>
        {newList.items.map((item, index) => (
          <Input
            key={index}
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
          />
        ))}
        <Input
          value={inputValue}
          disabled={false}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={() => addNewPoint(inputValue)}
        />
      </div>

      {/* ボタン */}
      <div className="flex mt-4 gap-2">
        <Button onPress={handleBack}>戻る</Button>
        <Button
          isDisabled={newList.title.trim() === "" || newList.items.length === 0}
          onPress={handleSave}
        >
          保存
        </Button>
      </div>
    </div>
  );
}

export default SettingCheckList;
