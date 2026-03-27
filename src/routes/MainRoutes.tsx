import IntroPage from "../page/Intro/IntroPage";
import MainLayout from "../layout/layout.main";
import HomePage from "../page/HomePage";
import { createBrowserRouter } from "react-router-dom";

const MainRouters = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/home",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default MainRouters;
