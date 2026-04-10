import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { FaFacebook } from "react-icons/fa";
import "./layout.footer.css";
import { useTheme } from "@/components/context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={`footer ${theme}`}>
        <div className="footer-text">
          © {new Date().getFullYear()} LeHoangPhuc_Portfolio.
        </div>

        <div className="footer-icons">
          <a
            href="https://github.com/LeHoangPhuc11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined />
          </a>

          <a
            href="https://www.facebook.com/le.hoangphuc.7906932"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>

          <a href="mailto:phucle.13122003@gmail.com">
            <MailOutlined />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
