import {
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  CodeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./layout.header.css";
import { useLang } from "@/components/context/LangContext";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const AppHeader: React.FC = () => {
  const { lang, toggleLang } = useLang();
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpenMenu(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );
    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-inner">
          {/* LEFT */}
          <div className="left-group">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">{lang === "vi" ? "Lê Hoàng Phúc" : "Le Hoang Phuc"}</span>
            </div>

            {/* MENU TOGGLE */}
            <div className="menu-toggle" onClick={() => setOpenMenu(true)}>
              ☰
            </div>
          </div>
          {/* MENU DESKTOP */}
          <div className="menu">
            <div
              className={`menu-item ${active === "home" ? "active" : ""}`}
              onClick={() => scrollToSection("home")}
            >
              <HomeOutlined /> {lang === "vi" ? "Trang Chủ" : "Home"}
            </div>
            <div
              className={`menu-item ${active === "about" ? "active" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              <UserOutlined /> {lang === "vi" ? "Giới Thiệu" : "About"}
            </div>
            <div
              className={`menu-item ${active === "projects" ? "active" : ""}`}
              onClick={() => scrollToSection("projects")}
            >
              <ProjectOutlined /> {lang === "vi" ? "Portfolios" : "Portfolios"}
            </div>
            <div
              className={`menu-item ${active === "skills" ? "active" : ""}`}
              onClick={() => scrollToSection("skills")}
            >
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
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </div>
            <div
              className="contact-btn"
              onClick={() => navigate("/home/contact")}
            >
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
        
        <div
          className={`mobile-item ${active === "home" ? "active" : ""}`}
          onClick={() => scrollToSection("home")}
        >
          <HomeOutlined /> {lang === "vi" ? "Trang chủ" : "Home"}
        </div>
        <div
          className={`mobile-item ${active === "about" ? "active" : ""}`}
          onClick={() => scrollToSection("about")}
        >
          <UserOutlined /> {lang === "vi" ? "Giới thiệu" : "About"}
        </div>
        <div
          className={`mobile-item ${active === "projects" ? "active" : ""}`}
          onClick={() => scrollToSection("projects")}
        >
          <ProjectOutlined /> {lang === "vi" ? "Dự án" : "Projects"}
        </div>
        <div
          className={`mobile-item ${active === "skills" ? "active" : ""}`}
          onClick={() => scrollToSection("skills")}
        >
          <CodeOutlined /> {lang === "vi" ? "Kỹ năng" : "Skills"}
        </div>
      </div>
    </>
  );
};

export default AppHeader;
