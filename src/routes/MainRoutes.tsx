import IntroPage from "../page/intro/IntroPage";
import MainLayout from "../layout/layout.main";
import HomePage from "../page/home/HomePage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "@/page/contact/ContactPage";
import DetailPage from "@/page/detail/DetailPage";
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
