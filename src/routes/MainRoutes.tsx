import IntroPage from "../page/Intro/IntroPage";
import MainLayout from "../layout/layout.main";
import HomePage from "../page/HomePage";
import { createBrowserRouter } from "react-router-dom";
import ContactPage from "@/page/ContactPage";

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
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export default MainRouters;
