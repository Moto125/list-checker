import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router/internal/react-server-client";
import SettingCheckList from "./features/settings/SettingCheckList";
import Review from "./features/review/Review";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
  <Routes>
    <Route index element={<Review />} />
    <Route path="/setting" element={<SettingCheckList />} />
  </Routes>
  </BrowserRouter>,
);
