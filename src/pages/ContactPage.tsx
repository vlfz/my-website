import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import MD from "react-markdown";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="content">
        <h1 className="title-1">{t("contact_title")}</h1>

        <p>{t("contact_info_p1")}</p>
        <MD source={t("contact_info_p2")!} />

        <hr className="divider" />

        <div className="button-in-row">
          <a href="mailto:hello@sqdsh.top" className="text-link">
            <FontAwesomeIcon icon={faEnvelope} size="lg" /> {t("contact_links_email")}
          </a>

          <a href="https://t.me/trustworthy_dev" className="text-link">
            <FontAwesomeIcon icon={faTelegramPlane} size="lg" /> {t("contact_links_telega")}
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
