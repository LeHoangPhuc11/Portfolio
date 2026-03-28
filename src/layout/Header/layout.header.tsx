import { Layout, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  CodeOutlined,
  FacebookOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import "./layout.header.css";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <div className="header-inner">
        {/* LEFT: LOGO */}
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Phuc Dev</span>
        </div>

        {/* CENTER: MENU */}
        <div className="menu">
          <div className="menu-item active">
            <HomeOutlined /> Home
          </div>

          <div className="menu-item">
            <UserOutlined /> About
          </div>

          <div className="menu-item">
            <ProjectOutlined /> Projects
          </div>

          <div className="menu-item">
            <CodeOutlined /> Skills
          </div>
        </div>

        {/* RIGHT: SOCIAL + BUTTON */}
        <div className="right">
          <img src="src/assets/img/zalo.png" alt="zalo" className="icon-img" />
          <a
            href="https://www.facebook.com/le.hoangphuc.7906932?locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined className="icon" />
          </a>
          <a
            href="https://github.com/LeHoangPhuc11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined className="icon" />
          </a>
          <div className="contact-btn">Contact</div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
