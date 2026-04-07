import React, { useEffect, useRef, useState } from "react";
import "./ProjectPage.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectPage: React.FC = () => {
  const [active, setActive] = useState<"projects" | "tech">("projects");
  const navigate = useNavigate();
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const projects = t("projects.list", { returnObjects: true }) as {
    title: string;
    description: string;
    tech: string[];
  }[];
  const techGroups = t("techGroups", { returnObjects: true }) as {
    title: string;
    items: { name: string; icon: string }[];
  }[];

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
      id="projects"
      ref={ref}
      className={`projects-section ${show ? "show" : ""}`}
    >
      <h1 className="projects-title">{t("projects.title")}</h1>

      <div className="projects-tabs">
        <div
          className={`tab ${active === "projects" ? "active" : ""}`}
          onClick={() => setActive("projects")}
        >
          {t("menu.techproject")}
        </div>
        <div
          className={`tab ${active === "tech" ? "active" : ""}`}
          onClick={() => setActive("tech")}
        >
          {t("menu.tech")}
        </div>
      </div>

      <div className="projects-content">
        {active === "projects" && (
          <div className="projects-grid">
            {projects.map((proj, index) => (
              <div key={index} className="project-card">
                <div className="project-inner">
                  <img
                    src={`src/assets/img/portfolio.png`}
                    alt={proj.title}
                  />
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className="project-tech">
                    {proj.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="details-btn"
                    onClick={() => navigate(`/home/projects/${index}`)}
                  >
                    {t("projects.details")} <span className="arrow">➜</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {active === "tech" && (
          <div className="tech-groups">
            {techGroups.map((group, i) => (
              <div key={i} className="tech-group">
                <h3 className="group-title">{group.title}</h3>
                <div className="tech-grid">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="tech-card">
                      <img src={item.icon} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectPage;