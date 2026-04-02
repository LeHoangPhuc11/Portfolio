import { FaCode, FaUser, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
import DeveloperPage from "@/components/common/developerPage";

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="intro_wrapper">
        <div className="intro_content">
          <div className="intro_left">
            <div className="intro_icon_container">
              {[FaCode, FaUser, FaGithub].map((Icon, i) => (
                <div key={i} className="intro_icon">
                  <Icon />
                </div>
              ))}
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
              www.portfolio.my.com
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
