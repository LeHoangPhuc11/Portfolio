import IntroPage from "../page/Intro/IntroPage";
import MainLayout from "../layout/layout.main";
import HomePage from "../page/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "@/page/Contact/ContactPage";
import DetailPage from "@/page/Detail/DetailPage";
import NotFoundPage from "@/components/common/404";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />

      <Route path="/home" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="projects/:id" element={<DetailPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouters;
