import React from "react";
import { useTranslation } from "react-i18next";
import { Twemoji } from "react-emoji-render";

const Footer = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "ru-RU") {
      i18n.changeLanguage("en-US");
    } else {
      i18n.changeLanguage("ru-RU");
    }
  };

  return (
    <>
      <footer className="footer">
        <p onClick={() => changeLanguage()} style={{ cursor: "pointer" }}>
          Switch to {i18n.language === "ru-RU" ? <Twemoji text="🇺🇸" /> : <Twemoji text="🇷🇺" />}
        </p>
      </footer>
    </>
  );
};

export default Footer;
