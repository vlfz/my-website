import React, { useState, useEffect, createRef, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const [state, setState] = useState<String>(location.pathname);

  const homeButton = createRef<HTMLAnchorElement>();
  const projectsButton = createRef<HTMLAnchorElement>();
  const contactButton = createRef<HTMLAnchorElement>();

  /** Detects pathname changes andupdates the state */
  useEffect(() => {
    setState(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    switch (state) {
      case "/":
        homeButton.current?.classList.add("active");
        break;

      case "/projects":
        projectsButton.current?.classList.add("active");
        break;

      case "/contact":
        contactButton.current?.classList.add("active");
        break;
    }

    return () => {
      document.querySelectorAll(".active").forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
    };
  }, [state, homeButton, contactButton, projectsButton]);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="link" ref={homeButton}>
              {t("nav_home")}
            </Link>
          </li>

          <li>
            <Link to="/projects" className="link" ref={projectsButton}>
              {t("nav_projects")}
            </Link>
          </li>

          <li>
            <Link to="/contact" className="link" ref={contactButton}>
              {t("nav_contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default memo(Navigation);
