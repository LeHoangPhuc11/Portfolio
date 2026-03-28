import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { FaDiscord } from "react-icons/fa"; 
import "./layout.footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        © {new Date().getFullYear()} LeHoangPhuc. All rights reserved.
      </div>
      <div className="footer-icons">
        <a href="https://github.com/LeHoangPhuc11" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
        <a href="mailto:phucle.13122003@gmail.com">
          <MailOutlined />
        </a>
      </div>
    </footer>
  );
};

export default Footer;