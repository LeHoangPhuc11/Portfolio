import { useNavigate } from "react-router-dom";
import "./ContactPage.css";
import BackgroundBlobs from "@/components/backround/BackgroundBlobs";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <BackgroundBlobs />
      <div className="contact-page-wrapper">
        <div className="contact-page-card">
          {/* Header */}
          <div className="contact-page-header">
            <button
              className="contact-page-back"
              onClick={() => navigate("/home")}
            >
              <FaArrowLeft />
            </button>
            <h2 className="contact-page-name">{t("contact.name")}</h2>
          </div>

          {/* Info */}
          <div className="contact-page-info">
            <p>
              <span className="icon-box">
                <FaPhoneAlt className="contact-icon" />
              </span>
              {t("contact.phone")}: <a href="tel:0898021522">0898021522</a>
            </p>

            <p>
              <span className="icon-box">
                <FaMapMarkerAlt className="contact-icon" />
              </span>
              {t("contact.address")}: {t("contact.location")}
            </p>

            <p>
              <span className="icon-box">
                <FaEnvelope className="contact-icon" />
              </span>
              {t("contact.email")}:{" "}
              <a href="mailto:phucle.13122003@gmail.com">
                phucle.13122003@gmail.com
              </a>
            </p>

            <p>
              <span className="icon-box">
                <FaGithub className="contact-icon" />
              </span>
              {t("contact.github")}:
              <a
                href="https://github.com/LeHoangPhuc11"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/LeHoangPhuc11
              </a>
            </p>
          </div>

          {/* Button */}
          <div className="contact-page-footer">
            <button
              className="contact-page-btn"
              onClick={() =>
                (window.location.href = "mailto:phucle.13122003@gmail.com")
              }
            >
              <FaPaperPlane /> {t("contact.contactBtn")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
