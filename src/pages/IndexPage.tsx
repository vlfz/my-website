import React from "react";
import { useTranslation } from "react-i18next";
import MD from "react-markdown";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="content">
        <img src="https://github.com/vlfz.png" className="avatar" alt="avatar" />
        <h1 className="title-1">vlfz</h1>

        <MD source={t("index_paragraph_1")!} />
        <a rel=\"me\" href=\"https://nether.sqdsh.top/@admin\">Mastodon</a>
      </section>
    </>
  );
};

export default IndexPage;
