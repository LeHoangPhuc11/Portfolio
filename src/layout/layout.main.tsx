import { Outlet } from "react-router-dom";
import Header from "./Header/layout.header";
import Footer from "./Footer/layout.footer";

const HEADER_HEIGHT = 80;
const MainLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, marginTop: HEADER_HEIGHT }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;