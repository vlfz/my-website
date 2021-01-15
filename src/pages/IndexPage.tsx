import React from "react";
import { useTranslation } from "react-i18next";
import MD from "react-markdown";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="content">
        <img src="https://github.com/MORET5U.png" className="avatar" alt="avatar" />
        <h1 className="title-1">moretsu</h1>

        <MD source={t("index_paragraph_1")!} />
        <MD source={t("index_paragraph_2")!} />
      </section>
    </>
  );
};

export default IndexPage;
