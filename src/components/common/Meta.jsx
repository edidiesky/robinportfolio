import React from "react";
import { Helmet } from "react-helmet";

export default function Meta({ title, keyword, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keyword" keyword={keyword} />
      <meta name="description" description={description} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: "Portfolio - Edidiong Essien",
  description: "my collection of thoughts and works",
  keyword: "portfolio, a MERN STACK developer",
};
