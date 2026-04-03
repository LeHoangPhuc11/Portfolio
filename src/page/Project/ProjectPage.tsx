import React, { useEffect, useRef, useState } from "react";
import "./ProjectPage.css";
import { useNavigate } from "react-router-dom";
import { useLang } from "@/components/context/LangContext";

const techGroups = [
  {
    title: "Frontend & Tools",
    items: [
      { name: "React", icon: "src/assets/img/react.png" },
      { name: "TypeScript", icon: "src/assets/img/typescript.png" },
      { name: "JavaScript", icon: "src/assets/img/javascript.png" },
      { name: "HTML", icon: "src/assets/img/html.png" },
      { name: "CSS", icon: "src/assets/img/css.png" },
      { name: "Tailwind CSS", icon: "src/assets/img/tailwind.png" },
      { name: "Git", icon: "src/assets/img/git.png" },
      { name: "Postman", icon: "src/assets/img/postman.png" },
    ],
  },
];
const projectsData = [
  {
    image: "src/assets/img/portfolio.png",
    tech: ["React", "TypeScript", "CSS"],
  },
  {
    image: "src/assets/img/portfolio.png",
    tech: ["React", "TypeScript", "CSS"],
  },
];
const content = {
  vi: {
    title: "Portfolio",
    tabs: { projects: "Dự Án", tech: "Công Nghệ" },
    details: "Chi tiết",
    projects: [
      {
        title: "Portfolio Website",
        description:
          "Portfolio cá nhân được xây dựng bằng React và TypeScript, hỗ trợ responsive, dark/light mode và tối ưu trải nghiệm người dùng.",
      },
      {
        title: "Key_Nexus",
        description:
          "Website thương mại điện tử bán đồ điện tử, tích hợp chatbox, responsive và dark/light mode, xây dựng bằng React + TypeScript.",
      },
    ],
  },
  en: {
    title: "Portfolio",
    tabs: { projects: "Projects", tech: "Tech Stack" },
    details: "Details",
    projects: [
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio built with React and TypeScript, featuring responsive design, dark/light mode, and optimized UX.",
      },
      {
        title: "Key_Nexus",
        description:
          "An e-commerce website for electronic products with chatbox integration, responsive UI, and dark/light mode.",
      },
    ],
  },
};

const ProjectPage: React.FC = () => {
  const [active, setActive] = useState("projects");
  const navigate = useNavigate();
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);
  const { lang } = useLang();
  const t = content[lang];

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
      <h1 className="projects-title">{t.title}</h1>

      <div className="projects-tabs">
        <div
          className={`tab ${active === "projects" ? "active" : ""}`}
          onClick={() => setActive("projects")}
        >
          {t.tabs.projects}
        </div>
        <div
          className={`tab ${active === "tech" ? "active" : ""}`}
          onClick={() => setActive("tech")}
        >
          {t.tabs.tech}
        </div>
      </div>

      <div className="projects-content">
        {active === "projects" && (
          <div className="projects-grid">
            {projectsData.map((proj, index) => (
              <div key={index} className="project-card">
                <div className="project-inner">
                  <img src={proj.image} alt={t.projects[index].title} />
                  <h3>{t.projects[index].title}</h3>
                  <p>{t.projects[index].description}</p>
                  <div className="project-tech">
                    {proj.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="details-btn"
                    onClick={() => navigate("/home/details")}
                  >
                    {t.details} <span className="arrow">➜</span>
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