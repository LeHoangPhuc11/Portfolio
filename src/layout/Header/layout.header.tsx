import {
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  CodeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./layout.header.css";
import { useLang } from "@/components/context/LangContext";
import { useState } from "react";
import { useTheme } from "@/components/context/ThemeContext";

const AppHeader: React.FC = () => {
  const { lang, toggleLang } = useLang();
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="header">
        <div className="header-inner">
          {/* LEFT */}
          <div className="left-group">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">Phuc Dev</span>
            </div>

            {/* MENU TOGGLE */}
            <div className="menu-toggle" onClick={() => setOpenMenu(true)}>
              ☰
            </div>
          </div>

          {/* MENU DESKTOP */}
          <div className="menu">
            <div className="menu-item active">
              <HomeOutlined /> {lang === "vi" ? "Trang Chủ" : "Home"}
            </div>
            <div className="menu-item">
              <UserOutlined /> {lang === "vi" ? "Giới Thiệu" : "About"}
            </div>
            <div className="menu-item">
              <ProjectOutlined /> {lang === "vi" ? "Dự Án" : "Projects"}
            </div>
            <div className="menu-item">
              <CodeOutlined /> {lang === "vi" ? "Kĩ Năng" : "Skills"}
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <a
              href="https://github.com/LeHoangPhuc11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined className="icon" />
            </a>

            {/* LANGUAGE */}
            <div className="lang-btn" onClick={toggleLang}>
              <img
                src={
                  lang === "vi"
                    ? "src/assets/img/vietnam.png"
                    : "src/assets/img/anh.png"
                }
                alt="language"
              />
            </div>
            <div className="theme-btn" onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </div>
            <div className="contact-btn">
              {lang === "vi" ? "Liên Hệ" : "Contact"}
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {openMenu && (
        <div className="overlay" onClick={() => setOpenMenu(false)}></div>
      )}

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${openMenu ? "show" : ""}`}>
        <div className="mobile-header">
          <span onClick={() => setOpenMenu(false)}>✕</span>
          <span>Menu</span>
        </div>

        <div className="mobile-item">
          <HomeOutlined /> {lang === "vi" ? "Trang chủ" : "Home"}
        </div>
        <div className="mobile-item">
          <CodeOutlined /> {lang === "vi" ? "Kỹ năng" : "Skills"}
        </div>
        <div className="mobile-item">
          <ProjectOutlined /> {lang === "vi" ? "Dự án" : "Projects"}
        </div>
        <div className="mobile-item">
          <UserOutlined /> {lang === "vi" ? "Giới thiệu" : "About"}
        </div>
      </div>
    </>
  );
};

export default AppHeader;
