import { Route, Routes } from "react-router-dom";
import MainRouters from "./routes/MainRoutes";

function App() {
  return (
      <Routes>
      <Route path="/*" element={<MainRouters />} />
    </Routes>
  );
}

export default App;