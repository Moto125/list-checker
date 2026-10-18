import { useNavigate } from "react-router";
import "../../App.css";
import { Button, Input, Label } from "@heroui/react";
import { ChecklistData } from "../../type/ChecklistStoreData";
import { useState, KeyboardEvent } from "react";
function SettingCheckList() {
  const navigate = useNavigate();
  const [newList, setNewList] = useState<ChecklistData>({
    id: "",
    title: "",
    items: [],
    lastUpdated: Date.now(),
  });
  const [inputValue, setInputValue] = useState("");

  const addNewPoint = (newPoint: string) => {
    if (newPoint.trim() !== "") {
      setNewList({
        ...newList,
        items: [...newList.items, newPoint],
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      const trimmedValue = inputValue.trim();

      if (trimmedValue) {
        addNewPoint(trimmedValue);
        setInputValue("");
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="h-10">
        <Label>チェックリスト編集画面</Label>
      </div>
      {/* データ入力 */}
      <div className="flex flex-col gap-2">
        <div>
          <Label>チェックリスト名</Label>
          <Input
            value={newList.title}
            disabled={false}
            onChange={(e) => setNewList({ ...newList, title: e.target.value })}
          />
        </div>
        {newList.items.map((item, index) => (
          <Input key={index} value={item} disabled={false} />
        ))}
        <Input
          value={inputValue}
          disabled={false}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      <div className="">
        <Button onPress={() => navigate("/")}>戻る</Button>
        {/* TODO：保存機能の実装 */}
        <Button
          isDisabled={newList.title.trim() === "" || newList.items.length === 0}
          onPress={() => navigate("/")}
        >
          保存
        </Button>
      </div>
    </div>
  );
}

export default SettingCheckList;
