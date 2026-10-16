import { useNavigate } from "react-router";
import "../../App.css";
import { Button, Label } from "@heroui/react";
function SettingCheckList() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <div className="h-10">
        <Label>チェックリスト編集画面</Label>
      </div>
      {/* データ入力 */}
      <div>
        
      </div>
      <Button onPress={() => navigate("/")} >
        完了
      </Button>
    </div>
  );
}

export default SettingCheckList;
