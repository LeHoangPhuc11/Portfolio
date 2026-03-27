import { Outlet } from "react-router-dom";
import Header from "./layout.header";
import Footer from "./layout.footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;