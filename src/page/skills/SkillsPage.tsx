import React, { useEffect, useRef, useState } from "react";
import "./SkillsPage.css";
import { useTranslation } from "react-i18next";
import { imageMap } from "@/assets/images";

const skills = [
  { name: "React", icon: "react" },
  { name: "React Router", icon: "reactrouter" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "GitHub", icon: "github" },
  { name: "Postman", icon: "postman" },
  { name: "Antd", icon: "antd" },
  { name: "HTML", icon: "html" },
  { name: "Axios", icon: "axios" },
  { name: "Git", icon: "git" },
  { name: "Css", icon: "css" },
  { name: "Tailwindcss", icon: "tailwind" },
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
              <img src={imageMap[skill.icon]} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
