import {
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  CodeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./layout.header.css";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/context/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCode, FaFolderOpen, FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLang } from "@/components/context/lng.context";

const AppHeader: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const location = useLocation();
  const { lng, toggleLanguage } = useLang();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== "/home") {
      setActive("");
    }
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/home") {
      navigate("/home", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpenMenu(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#home, #about, #projects, #skills",
    );

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
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <div className="header">
        <div className="header-inner">
          {/* LEFT */}
          <div className="left-group">
            <div
              className="logo"
              onClick={() => {
                if (location.pathname !== "/home") {
                  navigate("/home");
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="logo-icon"
              />
              <span className="logo-text">{t("name")}</span>
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
              <HomeOutlined /> {t("menu.home")}
            </div>
            <div
              className={`menu-item ${active === "about" ? "active" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              <UserOutlined /> {t("menu.about")}
            </div>
            <div
              className={`menu-item ${active === "projects" ? "active" : ""}`}
              onClick={() => scrollToSection("projects")}
            >
              <FaFolderOpen /> {t("menu.projects")}
            </div>
            <div
              className={`menu-item ${active === "skills" ? "active" : ""}`}
              onClick={() => scrollToSection("skills")}
            >
              <FaCode /> {t("menu.skills")}
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
            <div className="lang-btn" onClick={toggleLanguage}>
              <FaGlobe className="lang-icon" />
              <span className="lang-text">{lng === "vi" ? "VN" : "EN"}</span>
            </div>
            <div className="theme-btn" onClick={toggleTheme}>
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </div>
            <div
              className="contact-btn"
              onClick={() => navigate("/home/contact")}
            >
              {t("menu.contact")}
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
          <HomeOutlined /> {t("menu.home")}
        </div>
        <div
          className={`mobile-item ${active === "about" ? "active" : ""}`}
          onClick={() => scrollToSection("about")}
        >
          <UserOutlined /> {t("menu.about")}
        </div>
        <div
          className={`mobile-item ${active === "projects" ? "active" : ""}`}
          onClick={() => scrollToSection("projects")}
        >
          <ProjectOutlined /> {t("menu.projects")}
        </div>
        <div
          className={`mobile-item ${active === "skills" ? "active" : ""}`}
          onClick={() => scrollToSection("skills")}
        >
          <CodeOutlined /> {t("menu.skills")}
        </div>
      </div>
    </>
  );
};

export default AppHeader;
