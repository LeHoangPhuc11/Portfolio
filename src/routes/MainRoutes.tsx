import IntroPage from "../page/Intro/IntroPage";
import MainLayout from "../layout/layout.main";
import HomePage from "../page/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "@/page/ContactPage";
import DetailPage from "@/page/DetailPage";

const MainRouters = () => {
  return (
    <Routes>
      {/* Intro */}
      <Route path="/" element={<IntroPage />} />

      {/* Main app */}
      <Route path="/home" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="details" element={<DetailPage />} />
      </Route>

      {/* Not found */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default MainRouters;
