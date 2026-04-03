import BackgroundBlobs from "@/components/backround/BackgroundBlobs";
import "./HomePage.css";
import { useLang } from "@/components/context/LangContext";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AboutPage from "../About/AboutPage";
import ProjectPage from "../Project/ProjectPage";
import SkillsPage from "../Skills/SkillsPage";

const content = {
  vi: {
    intro: "Xin Chào, Tôi là Phúc",
    title: "Frontend Developer",
    desc: "Tôi xây dựng giao diện người dùng hiện đại, responsive, tối ưu trải nghiệm và hiệu năng trên nhiều thiết bị, sử dụng React và các công nghệ web hiện đại.",
    tags: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
    projectBtn: "Dự Án ",
    contactBtn: "Liên Hệ ✉",
  },
  en: {
    intro: "Hello, I'm Phuc",
    title: "Frontend Developer",
    desc: "I build modern, responsive user interfaces, optimizing user experience and performance across devices using React and modern web technologies.",
    tags: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
    projectBtn: "Projects ",
    contactBtn: "Contact ✉",
  },
};

const HomePage = () => {
  const { lang } = useLang();
  const t = content[lang];
  const navigate = useNavigate();

  return (
    <div className="home">
      <BackgroundBlobs />
      <div id="home" className="home-container">
        {/* LEFT */}
        <div className="left">
          <div className="content">
            <h3 className="intro">{t.intro}</h3>
            <h1 className="title">{t.title}</h1>
            <p className="desc">{t.desc}</p>
            <div className="tags">
              {t.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="actions">
              <button
                className="btn primary"
                onClick={() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {t.projectBtn} <FaExternalLinkAlt size={10} />
              </button>
              <button
                className="btn secondary"
                onClick={() => navigate("/home/contact")}
              >
                {t.contactBtn}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right1">
          <div className="orbit-container">
            {/* Center Avatar */}
            <div className="center-avatar">
              <img src="src/assets/img/avata.png" alt="center" />
            </div>
            {/* Orbit items */}
            <div className="orbit">
              {[
                "src/assets/img/react.png",
                "src/assets/img/javascript.png",
                "src/assets/img/typescript.png",
                "src/assets/img/tailwind.png",
                "src/assets/img/github.png",
                "src/assets/img/css.png",
                "src/assets/img/html.png",
              ].map((img, index) => (
                <div
                  key={index}
                  className="orbit-item"
                  style={{ "--i": index } as React.CSSProperties}
                >
                  <img src={img} alt="tech" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AboutPage />
      <ProjectPage />
      <SkillsPage />
    </div>
  );
};

export default HomePage;
