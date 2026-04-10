import BackgroundBlobs from "@/components/backround/BackgroundBlobs";
import "./HomePage.css";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AboutPage from "../about/AboutPage";
import ProjectPage from "../project/ProjectPage";
import SkillsPage from "../skills/SkillsPage";
import { images, techIcons } from "@/assets/images"

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const home = t("home", { returnObjects: true }) as {
    intro: string;
    title: string;
    desc: string;
    tags: string[];
    projectBtn: string;
    contactBtn: string;
  };

  return (
    <div className="home">
      <BackgroundBlobs />
      <div id="home" className="home-container">
        {/* LEFT */}
        <div className="left">
          <div className="content">
            <h3 className="intro">{home.intro}</h3>
            <h1 className="title">{home.title}</h1>
            <p className="desc">{home.desc}</p>
            <div className="tags">
              {home.tags.map((tag, index) => (
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
                {home.projectBtn} <FaExternalLinkAlt size={10} />
              </button>
              <button
                className="btn secondary"
                onClick={() => navigate("/home/contact")}
              >
                {home.contactBtn}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right1">
          <div className="orbit-container">
            <div className="center-avatar">
              <img src={images.avatar} alt="center" />
            </div>
            <div className="orbit">
              {techIcons.map((img, index) => (
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