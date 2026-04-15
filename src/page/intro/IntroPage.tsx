import { FaUser, FaGithub, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
import DeveloperPage from "@/components/common/developerPage";

const icons = [
  { icon: FaEnvelope, link: "/home/contact" },
  { icon: FaUser, link: "/home" },
  { icon: FaGithub, link: "https://github.com/LeHoangPhuc11" },
];

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="intro_wrapper">
        <div className="intro_content">
          <div className="intro_left">
            <div className="intro_icon_container">
              {icons.map((item, i) => {
                const Icon = item.icon;
                return item.link ? (
                  <a
                    key={i}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.link.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="intro_icon"
                  >
                    <Icon />
                  </a>
                ) : (
                  <div key={i} className="intro_icon">
                    <Icon />
                  </div>
                );
              })}
            </div>
            <h1 className="intro_title">
              <span className="intro_word intro_word1">Welcome</span>
              <span className="intro_word intro_word2">To</span>
              <span className="intro_word intro_word3">My</span>
            </h1>
            <h2 className="intro_subtitle">
              <span className="intro_purple">Portfolio</span>{" "}
              <span className="intro_indigo">Website</span>
            </h2>
            <button
              className="intro_footer"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/home");
              }}
            >
              <span className="typing_text">www.portfolio.phuc.xyz</span>
            </button>
          </div>
          <div className="intro_right">
            <DeveloperPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
