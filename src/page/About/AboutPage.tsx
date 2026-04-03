import React, { useEffect, useRef, useState } from "react";
import "./AboutPage.css";
import { useLang } from "@/components/context/LangContext";

const content = {
  vi: {
    title: "Giới Thiệu",
    intro: "Xin chào, Tôi là",
    name: "Lê Hoàng Phúc",
    role: "Frontend Developer",
    desc1:
      "Hiện tại tôi đang là sinh viên năm cuối ngành CNTT tại Đại học Công Nghiệp TP.HCM (IUH), tập trung phát triển giao diện web hiện đại. Sử dụng thành thạo ReactJS, TypeScript và các công nghệ frontend để xây dựng giao diện responsive và tối ưu hiệu năng.",
    desc2:
      "Tôi đã xây dựng website portfolio cá nhân và đang phát triển một dự án web thực tế. Ngoài ra, có tham gia hỗ trợ trong các dự án nhóm, qua đó tích lũy kinh nghiệm làm việc và cải thiện kỹ năng phát triển giao diện.",
    desc3:
      "Tôi có khả năng tự học tốt, tư duy logic và luôn chủ động trong công việc; mong muốn làm việc trong môi trường chuyên nghiệp để phát triển kỹ năng và đóng góp vào các sản phẩm thực tế.",
    cvBtn: "Tải CV",
    projectBtn: "Xem Dự Án",
  },
  en: {
    title: "About Me",
    intro: "Hello, I'm",
    name: "Le Hoang Phuc",
    role: "Frontend Developer",
    desc1:
      "I am currently a final-year IT student at Industrial University of Ho Chi Minh City (IUH), focusing on modern web interface development. I am proficient in ReactJS, TypeScript, and frontend technologies to build responsive and high-performance user interfaces.",
    desc2:
      "I have built my personal portfolio website and am developing a real-world web project. I also participated in team projects, gaining practical experience and improving my frontend development skills.",
    desc3:
      "I have strong self-learning ability, logical thinking, and a proactive mindset. I aim to work in a professional environment to further develop my skills and contribute to real-world products.",
    cvBtn: "Download CV",
    projectBtn: "View Projects",
  },
};

const AboutPage: React.FC = () => {
  const { lang } = useLang();
  const t = content[lang];
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section ${show ? "show" : ""}`}
    >
      <h1 className="about-title">{t.title}</h1>
      <div className="about-container">
        {/* LEFT */}
        <div className="left3">
          <div
            className="avatar-wrapper"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              e.currentTarget.style.setProperty("--x", `${x}px`);
              e.currentTarget.style.setProperty("--y", `${y}px`);
            }}
          >
            <img
              src="src/assets/img/LeHoangPhuc.jpg"
              alt="avatar"
              className="about-avatar"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="right3">
          <div className="intro">
            {t.intro} <span className="name">{t.name}</span>
          </div>

          <h3>{t.role}</h3>

          <div className="about-text">{t.desc1}</div>
          <div className="about-text">{t.desc2}</div>
          <div className="about-text">{t.desc3}</div>

          <div className="about-buttons">
            <a href="/LeHoangPhuc-Resume.pdf" download>
              <button className="btn-primary">{t.cvBtn}</button>
            </a>
            <button
              className="btn-secondary"
              onClick={() => {
                const el = document.getElementById("projects");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {t.projectBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
