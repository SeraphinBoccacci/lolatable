/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

function SEO({ lang, metaTitle, metaDescription, metaUrl, metaImage }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        { name: "title", content: metaTitle },
        { name: "description", content: metaDescription },

        { property: "og:type", content: "website" },
        { property: "og:url", content: metaUrl },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:image", content: metaImage },

        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: metaUrl },
        { property: "twitter:title", content: metaTitle },
        { property: "twitter:description", content: metaDescription },
        { property: "twitter:image", content: metaImage },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: "fr",
  metaTitle: "Lol'à Table",
  metaDescription: "",
  metaUrl: "https://lolatable.fr",
  metaImage: "",
};

SEO.propTypes = {
  lang: PropTypes.string,
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  metaUrl: PropTypes.string,
  metaImage: PropTypes.string,
};

export default SEO;
