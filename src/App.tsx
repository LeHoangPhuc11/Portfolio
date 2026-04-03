import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/MainRoutes";
import MainRouters from "./routes/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <MainRouters />
    </BrowserRouter>
  );
}

export default App;