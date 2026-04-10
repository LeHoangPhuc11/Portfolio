import React, { useEffect, useRef, useState } from "react";
import "./SkillsPage.css";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "React", icon: "src/assets/img/react.png" },
  {
    name: "React Router",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
  },
  { name: "JavaScript", icon: "src/assets/img/javascript.png" },
  { name: "TypeScript", icon: "src/assets/img/typescript.png" },
  { name: "GitHub", icon: "src/assets/img/github.png" },
  { name: "Postman", icon: "src/assets/img/postman.png" },
  {
    name: "Antd",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
  },
  { name: "HTML", icon: "src/assets/img/html.png" },
  {
    name: "Axios",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
  },
  { name: "Git", icon: "src/assets/img/git.png" },
  { name: "Css", icon: "src/assets/img/css.png" },
  { name: "Tailwindcss", icon: "src/assets/img/tailwind.png" },
];

const SkillsPage: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills-section ${show ? "show" : ""}`}
    >
      <h2 className="skills-title"> {t("skills.title")}</h2>

      <div className="slider">
        <div className="slider-track">
          {[...skills, ...skills].map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
