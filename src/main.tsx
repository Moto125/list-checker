import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router/internal/react-server-client";
import SettingCheckList from "./features/settings/SettingCheckList";
import Top from "./features/top/Top";
import Finish from "./features/finish/Finish";
import InCheck from "./features/in-check/InCheck";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Top />} />
      <Route path="/setting" element={<SettingCheckList />} />
      <Route path="/in-check" element={<InCheck />} />
      <Route path="/finish" element={<Finish />} />
    </Routes>
  </BrowserRouter>,
);
