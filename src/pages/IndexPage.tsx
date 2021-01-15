import React from "react";
import { useTranslation } from "react-i18next";
import MD from "react-markdown";
import { OCTOCAT } from "../data";
import { Img } from "react-image";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="content">
        <Img
          alt="moretsu' avatar"
          className="avatar"
          src="https://github.com/MORET5U.png"
          loader={<img src={OCTOCAT} className="avatar" alt="octocat" />}
          unloader={<img src={OCTOCAT} className="avatar" alt="octocat" />}
        />
        <h1 className="title-1">moretsu</h1>

        <MD source={t("index_paragraph_1")!} />
        <MD source={t("index_paragraph_2")!} />
      </section>
    </>
  );
};

export default IndexPage;
