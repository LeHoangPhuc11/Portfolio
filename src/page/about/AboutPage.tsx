import React, { useEffect, useRef, useState } from "react";
import "./AboutPage.css";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t } = useTranslation(); // Sử dụng hook i18n
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section ${show ? "show" : ""}`}
    >
      <h1 className="about-title">{t("about.title")}</h1>
      <div className="about-container">
        {/* LEFT */}
        <div className="left3">
          <div
            className="avatar-wrapper"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty("--x", `${x}px`);
              e.currentTarget.style.setProperty("--y", `${y}px`);
            }}
          >
            <img
              src="src/assets/img/LeHoangPhuc.jpg"
              alt="avatar"
              className="about-avatar"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="right3">
          <div className="intro">
            {t("about.intro")} <span className="name">{t("name")}</span>
          </div>

          <h3>{t("about.role")}</h3>

          <div className="about-text">{t("about.desc1")}</div>
          <div className="about-text">{t("about.desc2")}</div>
          <div className="about-text">{t("about.desc3")}</div>

          <div className="about-buttons">
            <a href="/LeHoangPhuc-Resume.pdf" download>
              <button className="btn-primary">{t("about.cvBtn")}</button>
            </a>
            <button
              className="btn-secondary"
              onClick={() => {
                const el = document.getElementById("projects");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {t("about.projectBtn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;