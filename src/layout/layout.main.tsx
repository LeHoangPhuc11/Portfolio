import { Outlet } from "react-router-dom";
import Header from "./header/layout.header";
import Footer from "./footer/layout.footer";

// const HEADER_HEIGHT = 80;
const MainLayout = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
        }}
      >
        <Header />

        {/* MAIN CONTENT */}
        <main style={{ flex: 1, padding: "130px 20px 40px", minHeight: "80vh" }}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
