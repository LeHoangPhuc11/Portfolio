import { useNavigate, useParams } from "react-router-dom";
import { Card, Typography, Tag, Button, Carousel } from "antd";
import { ArrowLeftOutlined, GithubOutlined } from "@ant-design/icons";
import "./DetailPage.css";
import BackgroundBlobs from "@/components/backround/BackgroundBlobs";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const projects = [
  {
    id: "0",
    title: "Portfolio Website",
    images: [
      "/src/assets/img/portfolio1.png",
      "/src/assets/img/portfolio2.png",
      "/src/assets/img/portfolio.png",
    ],
    tech: ["React", "TypeScript", "CSS"],
    github: "https://github.com/LeHoangPhuc11/Portfolio",
  },
  {
    id: "1",
    title: "Key_Nexus",
    images: [
      "/src/assets/img/keynexus1.png",
      "/src/assets/img/keynexus2.png",
      "/src/assets/img/keynexus3.png",
    ],
    tech: ["React", "TypeScript", "CSS"],
    github: "https://github.com/nthuwng/key-nexus-fe",
  },
];

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const project = projects.find((p) => p.id === id);
  if (!project) return <h2>Project not found</h2>;
  const projectKey = project.id === "0" ? "portfolio" : "key_nexus";

  return (
    <>
      <BackgroundBlobs />
      <div className="detail-wrapper">
        <Card className="detail-card">
          <div className="detail-header">
            <button onClick={() => navigate("/home")} className="back-btn">
              <ArrowLeftOutlined />
            </button>

            <Title className="detail-title">
              {t(`project.${projectKey}.title`)}
            </Title>
          </div>

          <Carousel autoplay className="detail-carousel">
            {project.images.map((img, i) => (
              <div key={i}>
                <img src={img} alt="project" className="carousel-img" />
              </div>
            ))}
          </Carousel>

          <div className="detail-section">
            <h3>{t("detail.description")}</h3>
            <Paragraph className="detail-paragraph">{t(`project.${projectKey}.description`)}</Paragraph>
          </div>

          <div className="detail-section">
            <h3>{t("detail.role")}</h3>
            <ul className="role-list">
              {(
                t(`project.${projectKey}.role`, {
                  returnObjects: true,
                }) as string[]
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h3>{t("detail.tech")}</h3>
            <div className="tech-list">
              {project.tech.map((tItem, i) => (
                <Tag key={i} className="tech-tag">
                  {tItem}
                </Tag>
              ))}
            </div>
          </div>

          <div className="github-wrapper">
            <Button
              type="primary"
              icon={<GithubOutlined />}
              href={project.github}
              target="_blank"
              className="github-btn"
            >
              {t("detail.github")} ➜
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DetailPage;
