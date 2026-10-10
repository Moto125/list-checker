import { useNavigate } from "react-router";
import "../../App.css";
import { Button } from "../../common/Button";
import { Text } from "../../common/Text";
function SettingCheckList() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <div className="h-10">
        <Text text="チェックリスト編集画面" size="large" />
      </div>
      <Button text="完了" onPress={() => navigate("/")} />
    </div>
  );
}

export default SettingCheckList;
